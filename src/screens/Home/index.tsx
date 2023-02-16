import { useState, useCallback } from "react";
import { SectionList, Text, View } from 'react-native'
import { Container, Content, Title, Header, Profile } from "./styles";
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Button, Loading, MainCard, MealCard } from "@components";
import ProfileImg from '@assets/Profile.png';
import Logo from '@assets/Logo.svg'
import { MealGetAll } from "@storage/meal/mealsGetAll";
import { Statistic } from "@storage/storageConfig";
import { StatisticGetAll } from "@storage/statistic/statisticGetAll";

type DataType = {
    title: string;
    data: {
        date: string;
        hour: string;
        id: string;
        name: string;
        description: string;
        onDiet: boolean;
    }[]
}



export function Home() {

    const { navigate } = useNavigation();

    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState<DataType[]>([]);
    const [statistic, setStatistic] = useState<Statistic>({
        mealsAmount: 0,
        offDietMealsAmount: 0,
        onDietMealsAmount: 0,
        sequenceOfMealsOnDiet: 0,
        onDietMealsPercentage: '0'
    });



    async function fetchData() {
        try {
            setIsLoading(true);

            const data = await MealGetAll();
            const statistic = await StatisticGetAll();
            setMeals(data);
            setStatistic(statistic);


        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    useFocusEffect(useCallback(() => {
        fetchData();
        //AsyncStorage.clear();
    }, []))


    return (
        <Container>
            <Header>
                <Logo />
                <Profile source={ProfileImg} />
            </Header>
            {isLoading ? <Loading /> : meals && statistic &&
                <>
                    <MainCard
                        type={parseFloat(statistic.onDietMealsPercentage) >= 50 ? 'POSITIVE' : 'NEGATIVE'}
                        title={meals.length === 0 ? '0%' : statistic.onDietMealsPercentage + '%'}
                        subtitle="das refeições dentro da dieta"
                        handlePressButton={() => navigate('stats', statistic)}
                    />
                    <Content>
                        <Text style={{ marginBottom: 8 }}>Refeições</Text>
                        <Button
                            icon="create"
                            title="Nova refeição"
                            onPress={() => navigate('form')}
                        />
                        <View style={{ marginTop: 22 }}>
                            <SectionList
                                sections={meals}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <MealCard
                                        inDiet={item.onDiet}
                                        hour={item.hour}
                                        name={item.name}
                                        onPress={() => navigate('meal', {
                                            mealId: item.id,
                                            date: item.date
                                        })}

                                    />}
                                renderSectionHeader={({ section: { title } }) => (
                                    <Title>{title}</Title>
                                )}
                                showsVerticalScrollIndicator={false}
                                style={{ height: '75%' }}
                                contentContainerStyle={{ paddingBottom: 100 }}

                            />
                        </View>
                    </Content>
                </>
            }
        </Container>
    )
}
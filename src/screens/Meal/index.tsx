
import { Button, Header, Loading } from "@components";
import { Badge } from "@components/Badge";
import { Modal } from "@components/Modal";
import { Container, Content, MiniTitle, ModalText, Title } from "@screens/Meal/styles";
import { useCallback, useState } from 'react';
import { Alert, View } from "react-native";
import { useFocusEffect, useRoute, useNavigation } from '@react-navigation/native';
import dayjs from "dayjs";
import { MealType } from "@storage/storageConfig";
import { MealGetById } from "@storage/meal/mealGetById";
import { mealRemoveById } from "@storage/meal/mealRemoveById";



type RouteParams = {
    mealId: string;
    date: string;
}

export function Meal() {

    const [modalVisible, setModalVisible] = useState(false);
    const [meal, setMeal] = useState<MealType>();
    const [isLoading, setIsLoading] = useState(true);

    const { navigate } = useNavigation();

    const route = useRoute();
    const { mealId, date } = route.params as RouteParams;

    function handleModalVisible(visible: boolean) {
        setModalVisible(visible);
    }

    async function handleMealDelete() {
        try {
            await mealRemoveById(mealId, date);
            navigate('home');
        } catch (error) {
            Alert.alert('Refeição', 'Não foi possível deletar a refeição.')
        }
    }


    async function fetchMeal() {
        try {
            setIsLoading(true);

            const res = await MealGetById(mealId, date);
            setMeal(res);

        } catch (error) {
            Alert.alert('Refeição', 'Não foi possível carregar a refeição');
            navigate('home');
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchMeal();
    }, []))


    return (
        <>
            <Header title="Refeição" variant={meal?.onDiet ? "GREEN" : "RED"} />
            <Container>
                {isLoading ?
                    <Loading />
                    :
                    meal &&
                    <>

                        <View>
                            <Title>{meal.name}</Title>
                            <Content style={{ marginBottom: 24 }}>{meal.description}</Content>

                            <MiniTitle>Data e hora</MiniTitle>
                            <Content>{meal.date} às {dayjs(meal.hour).format('HH:mm')}</Content>

                            <Badge onDiet={meal.onDiet} />
                        </View>

                        <View>
                            <Button
                                title="Editar refeição"
                                icon="edit"
                                style={{ marginBottom: 8 }}
                                onPress={() => navigate('form', { mealId, mealDate: meal.date })}
                            />

                            <Button
                                title="Excluir refeição"
                                icon="delete"
                                type="secondary"
                                onPress={() => handleModalVisible(true)}
                            />
                        </View>

                        <Modal handleVisible={handleModalVisible} visible={modalVisible} >
                            <View >
                                <ModalText>Deseja realmente excluir o registro da refeição?</ModalText>
                                <View style={{ flexDirection: 'row' }}>
                                    <Button
                                        title="Cancelar"
                                        type="secondary"
                                        onPress={() => handleModalVisible(false)}
                                        style={{ width: 135, marginRight: 12 }}
                                    />
                                    <Button
                                        title="Sim, excluir"
                                        style={{ width: 135 }}
                                        onPress={handleMealDelete}
                                    />
                                </View>
                            </View>

                        </Modal>
                    </>
                }

            </Container>

        </>
    )
}
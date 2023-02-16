import { View } from 'react-native'
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from '@react-navigation/native'
import { BackButton, Box, Container, Content, Divider, Icon, Title } from "./styles";
import { Highlight } from "@components/Highlight";


type RouteParams = {
    mealsAmount: number,
    offDietMealsAmount: number,
    onDietMealsAmount: number,
    sequenceOfMealsOnDiet: number,
    onDietMealsPercentage: string
}

export function Stats() {
    const { COLORS } = useTheme();
    const { navigate } = useNavigation();
    const route = useRoute();
    const {
        onDietMealsPercentage,
        sequenceOfMealsOnDiet,
        offDietMealsAmount,
        onDietMealsAmount,
        mealsAmount,
    } = route.params as RouteParams;

    const onDiet = parseFloat(onDietMealsPercentage) >= 50;

    function handleBackButtonPress() {
        navigate('home')
    }


    return (
        <Container onDiet={onDiet}>
            <BackButton onPress={handleBackButtonPress}>
                <Icon color={onDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
            </BackButton>

            <Highlight title={onDietMealsPercentage + "%"} subtitle="das refeições dentro da dieta" />
            <Content>
                <Title>Estatísticas gerais</Title>
                <Box>
                    <Highlight
                        type="M"
                        title={sequenceOfMealsOnDiet.toString()}
                        subtitle="melhor sequencia de pratos dentro da dieta"
                    />
                </Box>
                <Box>
                    <Highlight
                        type="M"
                        title={mealsAmount.toString()}
                        subtitle="refeições registradas"
                    />
                </Box>
                <View style={{ flexDirection: 'row' }}>
                    <Box color="GREEN" small>
                        <Highlight
                            type="M"
                            title={onDietMealsAmount.toString()}
                            subtitle="refeições dentro da dieta"
                        />
                    </Box>
                    <Divider />
                    <Box color="RED" small>
                        <Highlight
                            type="M"
                            title={offDietMealsAmount.toString()}
                            subtitle="refeições fora da dieta"
                        />
                    </Box>
                </View>
            </Content>
        </Container>
    )
}
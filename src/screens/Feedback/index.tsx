import { View } from "react-native";
import { Container, FeedbackContainer, Subtitle, Title } from "./styles";
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from "@components/Button";
import FeedbackNegative from '@assets/FeedbackNegative.svg'
import FeedbackPositive from '@assets/FeedbackPositive.svg'

type RouteParams = {
    onDiet: boolean;
}

export function Feedback() {



    const route = useRoute();
    const { onDiet } = route.params as RouteParams;

    const { navigate } = useNavigation();

    function handleHomeButtonPress() {
        navigate('home');
    }

    if (onDiet) {

        return (
            <Container>
                <Title color="GREEN_DARK">Continue assim!</Title>
                <View style={{ flexDirection: 'row', marginBottom: 38 }}>
                    <Subtitle>Você continua </Subtitle>
                    <Subtitle bold>dentro da dieta. </Subtitle>
                    <Subtitle>Muito bem!</Subtitle>
                </View>
                <FeedbackPositive style={{ marginBottom: 32 }} />
                <Button
                    title="Ir para a página inicial"
                    fill={false}
                    onPress={handleHomeButtonPress}
                />
            </Container>
        )
    } else {
        return (
            <Container>
                <Title color="RED_DARK">Que pena!</Title>
                <FeedbackContainer>
                    <View style={{ flexDirection: 'row' }}>
                        <Subtitle>Você </Subtitle>
                        <Subtitle bold>saiu da dieta </Subtitle>
                        <Subtitle>dessa vez, mas continue</Subtitle>
                    </View>
                    <Subtitle> se esforçando e não desista!</Subtitle>
                </FeedbackContainer>
                <FeedbackNegative style={{ marginBottom: 32 }} />
                <Button
                    title="Ir para a página inicial"
                    fill={false}
                    onPress={handleHomeButtonPress}

                />
            </Container>
        )
    }
}
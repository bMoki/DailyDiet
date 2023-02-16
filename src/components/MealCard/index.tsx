import { Container, Divider, Hour, Status, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    inDiet: boolean,
    name: string,
    hour: string,
}

export function MealCard({ inDiet, hour, name, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Hour>{hour}</Hour>
            <Divider />
            <Title>{name}</Title>
            <Status inDiet={inDiet} />
        </Container>
    )
}
import { BackButton, Container, ContainerStyledProps, Icon, Title } from "./style";
import { useNavigation } from '@react-navigation/native'

type Props = {
    variant?: ContainerStyledProps;
    title: string;
}


export function Header({ variant, title }: Props) {
    const { goBack } = useNavigation();

    return (
        <Container variant={variant}>
            <BackButton onPress={goBack}>
                <Icon />
            </BackButton>
            <Title>{title}</Title>
        </Container>
    )
}
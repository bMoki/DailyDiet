import { Highlight } from "@components/Highlight";
import { useTheme } from "styled-components/native";
import { Button, Container, Icon, MainCardStyleProps } from "./styles";
import { TouchableOpacity } from 'react-native'

type Props = {
    type: MainCardStyleProps;
    title: string;
    subtitle: string;
    handlePressButton: () => void;
}

export function MainCard({ type, title, subtitle, handlePressButton }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container type={type}>
            <Button onPress={handlePressButton}>
                <Icon color={type === 'POSITIVE' ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
            </Button>
            <Highlight title={title} subtitle={subtitle} />
        </Container>
    )
}
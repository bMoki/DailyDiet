import { ButtonStyleProps, Container, Title } from "./styles";
import { TouchableOpacityProps } from 'react-native'
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
    icon?: 'none' | 'create' | 'edit' | 'delete';
    title: string;
    type?: ButtonStyleProps;
    fill?: boolean
}

export function Button({ type = 'primary', icon = 'none', title, fill = true, ...rest }: Props) {
    const { COLORS } = useTheme();

    function Icon() {
        switch (icon) {
            case 'none':
                return null;
            case 'create':
                return <Plus
                    size={18}
                    color={type === 'primary' ? COLORS.WHITE : COLORS.GRAY_100}
                />
            case 'edit':
                return <PencilSimpleLine
                    size={18}
                    color={type === 'primary' ? COLORS.WHITE : COLORS.GRAY_100}
                />
            case 'delete':
                return <Trash
                    size={18}
                    color={type === 'primary' ? COLORS.WHITE : COLORS.GRAY_100}
                />
        }
    }



    return (
        <Container {...rest} type={type} fill={fill}>
            <Icon />
            <Title type={type} >{title}</Title>
        </Container>
    )
}
import { Container, Icon, Label, StyledRadioButtonProps } from "./styles";
import { TouchableOpacityProps } from 'react-native'

type Props = {
    variant: StyledRadioButtonProps;
    selected?: boolean;
} & TouchableOpacityProps

export function RadioButton({ variant, selected = false, ...rest }: Props) {
    return (
        <Container variant={variant} selected={selected} {...rest}>
            <Icon variant={variant} />
            {variant === 'YES' ?
                <Label>Sim</Label> :
                <Label>Não</Label>}
        </Container>
    )
}
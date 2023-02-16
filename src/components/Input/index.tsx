import { Container, InputText, Label } from "./styles";
import { TextInputProps } from "react-native"

type Props = TextInputProps & {
    label: string;
    textArea?: boolean,
    small?: boolean,
}

export function Input({ label, textArea = false, small = false, ...rest }: Props) {
    return (
        <Container small={small}>
            <Label>{label}</Label>
            <InputText textAlignVertical="top" textArea={textArea} {...rest} />
        </Container>
    )
}
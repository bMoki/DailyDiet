import { Container, DotIcon, Label } from "@components/Badge/styles"

type Props = {
    onDiet: boolean
}

export function Badge({ onDiet }: Props) {
    return (
        <Container>
            <DotIcon color={onDiet ? "GREEN_DARK" : "RED_DARK"} />
            <Label>{onDiet ? "dentro" : "fora"} da dieta</Label>
        </Container>
    )
}
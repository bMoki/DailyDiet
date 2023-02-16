import { Container, HighlightStyleProps, Subtitle, Title } from "./styles"

type Props = {
    title: string,
    subtitle: string,
    type?: HighlightStyleProps,
}

export function Highlight({ title, subtitle, type = 'G' }: Props) {
    return (
        <Container>
            <Title type={type}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}
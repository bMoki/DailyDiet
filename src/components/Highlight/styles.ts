import styled, { css } from "styled-components/native";

export type HighlightStyleProps = 'G' | 'M';

type Props = {
    type: HighlightStyleProps;
}

export const Container = styled.View`
    justify-content: center;
    align-items:center;
`

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${type === 'G' ? theme.FONT_SIZE["2XL"] : theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_100};

        ${type === 'M' && css`
            margin-bottom:8px;
        `}
    `}
`
export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_200};
    `}
    text-align:center;
`
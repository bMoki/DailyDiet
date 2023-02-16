import styled, { css } from "styled-components/native";

type IconProps = {
    color: 'RED_DARK' | 'GREEN_DARK';
}

export const Container = styled.View`
    border-radius: 999px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    flex-direction: row;
    align-items:center;
    width: 144px;

    margin-bottom: 16px;
    margin-top: 24px;
`

export const DotIcon = styled.View<IconProps>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, color }) => theme.COLORS[color]};
    border-radius: 99px;
    margin-right: 8px;
`

export const Label = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR}
    `}
`
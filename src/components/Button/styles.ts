import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = 'primary' | 'secondary';

type Props = {
    type: ButtonStyleProps;
    fill: boolean;
}

type TitleProps = {
    type: ButtonStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    padding-left: 12px; 
    padding-right: 24px;

    align-self: ${({ fill }) => fill ? 'stretch' : 'center'};
    max-height:50px;
    min-height:50px;
    border-radius: 6px;

    flex-direction: row;
    justify-content:  center;
    align-items: center;

    ${({ theme, type }) => css`
        border: 1px solid ${type === 'primary' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100};
        background-color: ${type === 'primary' ? theme.COLORS.GRAY_200 : 'transparent'};
    `}

`
export const Title = styled.Text<TitleProps>`
    margin-left: 12px;
    ${({ theme, type }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    `}
`

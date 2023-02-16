import { TouchableOpacity } from "react-native";
import theme from "src/theme";
import styled, { css } from "styled-components/native";

export type StyledRadioButtonProps = 'YES' | 'NO';

type ContainerProps = {
    variant: StyledRadioButtonProps;
    selected: boolean;
}

type IconProps = {
    variant: StyledRadioButtonProps;
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
    flex: 1;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    min-height: 50px;
    max-height: 50px;
    border-radius: 6px;

    ${({ theme, selected, variant }) => selected ? css`
        background-color: ${variant === 'YES' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
        border: 1px solid ${variant === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    ` :
        css`
         background-color: ${theme.COLORS.GRAY_600};
         border: 1px solid ${theme.COLORS.GRAY_600};
    `}
`

export const Icon = styled.View<IconProps>`
    border-radius: 99px;
    width: 8px;
    height: 8px;
    margin-right:8px;

    background-color: ${({ theme, variant }) => variant === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}

`
export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
`


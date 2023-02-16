import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type StyledInputProps = {
    textArea: boolean;
}

export type StyledContainerProps = {
    small: boolean;
}

export const Container = styled.View<StyledContainerProps>`
  ${({ small }) => small && css`
        flex:1
  `}
  margin-bottom: 24px;
`
export const Label = styled.Text`
    ${({ theme }) => css`
        font-color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    margin-bottom: 6px;
`
export const InputText = styled(TextInput) <StyledInputProps>`
    min-height: 48px;
    max-height: 48px;
    

    border-radius: 6px;
    padding: 14px;
   
    ${({ textArea }) => textArea && css`
        min-height: 120px;
        max-height: 120px;
    `};

    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_700};
        border: 1px solid ${theme.COLORS.GRAY_500};
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`

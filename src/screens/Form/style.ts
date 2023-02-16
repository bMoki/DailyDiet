import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type DividerStyledProps = {
    size: number;
}

export const Container = styled(SafeAreaView)`
    flex:1;
    justify-content: space-between;
    padding:24px;
    padding-top:16px;
    border-radius:20px ;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Divider = styled.View<DividerStyledProps>`
    width: ${({ size }) => size}px;
`

export const Row = styled.View`
    flex-direction: row; 
    width: 100%;
`

export const Label = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    margin-bottom: 6px;
`
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 24px; 
`

export const Content = styled.View`
    margin-top: 36px;
`
export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    margin: 12px 0;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`
export const Profile = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`
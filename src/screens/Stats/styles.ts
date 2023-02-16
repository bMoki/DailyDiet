import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'

type ContainerStyleProps = {
    onDiet: boolean;
}

export type BoxStyleProps = {
    color?: 'RED' | 'GREEN';
    small?: boolean;
}

export const Container = styled(SafeAreaView) <ContainerStyleProps>`
    flex: 1;
    padding-top: 24px;
    background-color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
    flex: 1;
    padding: 24px;
    margin-top:36px ;
    border-top-right-radius:20px;
    border-top-left-radius:20px;
    background-color:${({ theme }) => theme.COLORS.GRAY_700};

    align-items:center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family:${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    margin-bottom: 20px;
`
export const Box = styled.View<BoxStyleProps>`
    max-height: 90px;
    min-height: 90px;

    margin:6px 0;
    justify-content:center;

    flex: 1;
    width:100%;
    padding: 12px 16px;
    justify-content:center;
    align-items:center;
    border-radius:8px;
    
    background-color:${({ theme }) => theme.COLORS.GRAY_600};

    ${({ theme, color }) => color && css`
        background-color: ${color === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `}

    ${({ small = false }) => small && css`
        max-height: 108px;
        min-height: 108px;  
    `}
`
export const Divider = styled.View`
    width: 12px;
`
export const BackButton = styled(TouchableOpacity)`
     position: absolute;
    top: 38px;
    left: 24px;
`

export const Icon = styled(ArrowLeft).attrs(() => ({
    size: 24
}))``;



import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from 'react-native'
import styled, { css } from "styled-components/native";

export type ContainerStyledProps = 'RED' | 'GREEN';

type Props = {
    variant?: ContainerStyledProps;
}

export const Container = styled(SafeAreaView) <Props>`
    flex-direction: row;
    justify-content:center;
    padding-top:18px;
    padding-bottom: 44px;
    margin-bottom:-20px;
    ${({ theme, variant }) => css`
        background-color: 
        ${variant ?
            variant === 'RED' ?
                theme.COLORS.RED_LIGHT :
                theme.COLORS.GREEN_LIGHT :
            theme.COLORS.GRAY_500
        };
    `}
`
export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}
`
export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    top: 46px;
    left: 24px;
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))``;
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'

type Props = {
    inDiet: boolean
}

export const Container = styled(TouchableOpacity)`
    width:100%;

    margin-bottom:8px;
    min-height: 50px;
    max-height: 50px;

    border-radius:6px;

    flex-direction:row;
    align-items: center;

    padding: 12px 14px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

`

export const Status = styled.View<Props>`
    width: 14px;
    height: 14px;

    border-radius: 999px;
    background-color:${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};


`

export const Hour = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
    width:75% ;
`

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color:${({ theme }) => theme.COLORS.GRAY_400};
    margin-right: 12px;
    margin-left: 12px;
`
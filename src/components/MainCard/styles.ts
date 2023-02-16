import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'


export type MainCardStyleProps = 'POSITIVE' | 'NEGATIVE';

type Props = {
    type: MainCardStyleProps;
}

export const Container = styled.View<Props>`
    flex: 1;
    min-height: 102px;
    max-height: 102px;
    border-radius: 8px;
    padding: 20px;

    background-color:${({ theme, type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Button = styled(TouchableOpacity)`
    position: absolute;
    top: 5px;
    right: 4px;
`
export const Icon = styled(ArrowUpRight).attrs(() => ({
    size: 24
}))``;


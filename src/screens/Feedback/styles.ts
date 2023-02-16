import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type SubtitleProps = {
    bold?: boolean;
}

type TitleProps = {
    color: 'RED_DARK' | 'GREEN_DARK';
}

export const Container = styled(SafeAreaView)`
    flex:1;
    padding: 24px;
    align-items: center;
    justify-content:center;
`
export const FeedbackContainer = styled.View`
    margin-bottom: 40px;
    padding: 0 32px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text<TitleProps>`
    ${({ theme, color }) => css`
        color: ${theme.COLORS[color]};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`
export const Subtitle = styled.Text<SubtitleProps>`
    ${({ theme, bold = false }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    `}
`
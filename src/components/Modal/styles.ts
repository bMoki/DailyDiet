import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: 'rgba(0,0,0,0.5)';
`

export const Content = styled.View`
    align-self: stretch;
    margin:24px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 20px;
    align-items: center;
`;
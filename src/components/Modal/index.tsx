import { Modal as NativeModal } from "react-native";
import { ReactElement } from "react"
import { Container, Content } from "./styles";;

type Props = {
    visible: boolean;
    handleVisible: (visible: boolean) => void;
    children: ReactElement;
}

export function Modal({ visible, handleVisible, children }: Props) {
    return (


        <NativeModal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                handleVisible(!visible);
            }}>
            <Container>
                <Content>
                    {children}
                </Content>

            </Container>
        </NativeModal >

    )
}
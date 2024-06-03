import { Actionsheet, Button } from "native-base";
import { Text, View } from "react-native";
import { style } from "./style";

interface SheetModalProps {
    isOpen: any;
    onOpen: any;
    onClose: any;
    type: string;
}
const SheetModal: React.FC<SheetModalProps> = ({ isOpen, onOpen, onClose, type }) => {

    return (
        <>
            <Button style={style.button} onPress={onOpen}>
                <Text style={style.buttonText}>
                    {type}
                </Text>
            </Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Text style={style.sheetTextTitle}>Assinar contrato?</Text>
                    <Text style={style.sheetTextsubtitle}>Ao assinar você concorda com os termos de uso apresentados no contrato.</Text>
                    <View style={style.buttonContainer}>
                        <Button style={[style.smallButton, style.smallGreyButton]}>
                            <Text style={style.buttonText}>Voltar</Text>
                        </Button>
                        <Button style={style.smallButton}>
                            <Text style={style.buttonText}>Assinar</Text>
                        </Button>
                    </View>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    );
};


export default SheetModal;
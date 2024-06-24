import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import {
    Actionsheet, Button, ActionsheetContent, ActionsheetBackdrop,
    ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator
} from '@gluestack-ui/themed';
import { LongButton } from '../button';

interface SheetModalProps {
    isOpen: any;
    onOpen: any;
    onClose: any;
    type?: string;
    title?: string;
    text?: string;
}
const SheetModal: React.FC<SheetModalProps> = ({ isOpen, onOpen, onClose, type, title, text }) => {
    return (
        <>
            {type === 'Assinar' &&
                (
                    <Button style={style.button} onPress={onOpen}>
                        <Text style={style.buttonText}>
                            {type}
                        </Text>
                    </Button>
                )
            }
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <ActionsheetBackdrop />
                <ActionsheetContent >
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <Text style={style.sheetTextTitle}>{title}</Text>
                    <Text style={style.sheetTextsubtitle}>{text}</Text>

                    {type === 'Assinar' &&
                        (
                            <View style={style.buttonContainer}>
                                <Button style={[style.smallButton, style.smallGreyButton]}>
                                    <Text style={style.buttonText}>Voltar</Text>
                                </Button>
                                <Button style={style.smallButton}>
                                    <Text style={style.buttonText}>Assinar</Text>
                                </Button>
                            </View>
                        )}

                    {type === 'Notificação' &&
                        (
                            <View style={style.notificationContainer}>
                                <LongButton title={'Lida'} onPress={isOpen} />
                            </View>
                        )
                    }
                </ActionsheetContent>
            </Actionsheet >
        </>
    );
};

export default SheetModal;

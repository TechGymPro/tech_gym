import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import {
    Actionsheet, ActionsheetContent, ActionsheetBackdrop,
    ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator
} from '@gluestack-ui/themed';
import { LongButton, SmallButton } from '../button';

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
                    <LongButton disabled title={`${type}`} onPress={onOpen} />
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
                                <SmallButton
                                    type='grey'
                                    title={'Voltar'}
                                    onPress={undefined}
                                />
                                <SmallButton
                                    type='secondaryYellow'
                                    title={'Assinar'}
                                    onPress={undefined}
                                />
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

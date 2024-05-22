import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { style } from './style';

const CELL_COUNT = 6;

interface ConfirmationCodeInputProps {
    onCodeFilled: () => void;
}

const ConfirmationCodeInput: React.FC<ConfirmationCodeInputProps> = ({ onCodeFilled }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        if (value.length === CELL_COUNT) {
            onCodeFilled();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return (
        <SafeAreaView style={style.container}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={style.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                autoComplete="one-time-code"
                testID="my-code-input"
                renderCell={({ index, symbol, isFocused }) => (
                    <View style={[style.cell, isFocused && style.focusCell]} key={index}>
                        <Text
                            key={index}
                            style={style.text}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default ConfirmationCodeInput;
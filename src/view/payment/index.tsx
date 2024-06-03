import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Radio } from 'native-base'
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/longButton';
import { SimpleHeader } from '../../components/simpleHeader';
import { InputForm } from '../../components/inputFom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CreditCard from '../../components/creditCard';
import { background, color } from 'native-base/lib/typescript/theme/styled-system';

const Payment = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [value, setValue] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [nome, setNome] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const handleOnPress = () => {

    }

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ height: '100%' }}>
                <SimpleHeader />
                <TitleAndSubtitleCard
                    title={'Pagar plano'}
                    subtitle={'Escolha a forma de pagamento'}
                    marginCustom
                />
                <Radio.Group
                    style={style.radioContainer}
                    name="paymentMode"
                    accessibilityLabel="payment modes"
                    value={value}
                    onChange={
                        (newValue: any) => setValue(newValue)
                    }>
                    <Radio
                        _checked={{
                            borderColor: colors.greyBorderColor,
                            bg: colors.primary,
                            _icon: {
                                color: colors.primary
                            }
                        }}
                        value="Boleto"
                        my={1}>
                        <Image
                            style={style.radioImg}
                            source={require('../../assets/img/boleto.png')}
                        />
                        Boleto
                    </Radio>
                    <Radio
                        _checked={{
                            borderColor: colors.greyBorderColor,
                            bg: colors.primary,
                            _icon: {
                                color: colors.primary
                            }
                        }}
                        value="Pix"
                        my={2}>
                        <Image
                            style={style.radioImg}
                            source={require('../../assets/img/pix.png')}
                        />
                        Pix
                    </Radio>
                    <Radio
                        _checked={{
                            borderColor: colors.greyBorderColor,
                            bg: colors.primary,
                            _icon: {
                                color: colors.primary
                            }
                        }}
                        value="Cartão de crédito"
                        my={1}>
                        <Image
                            style={style.radioImg}
                            source={require('../../assets/img/card.png')}
                        />
                        Cartão de crédito
                    </Radio>
                </Radio.Group>

                <CreditCard />

                <View style={style.inputContainer}>
                    <InputForm
                        label={'Número do cartão'}
                        placeholder={'0000 0000 0000 0000'}
                        onChange={setCardNumber}
                        value={cardNumber}
                    />
                    <InputForm
                        label={'Nome no cartão'}
                        placeholder={'Insira o nome'}
                        onChange={setNome}
                        value={nome}
                    />
                    <View style={style.smallInputContainer}>
                        <View style={style.smallInput}>
                            <InputForm
                                label={'Vencimento'}
                                placeholder={'00/00'}
                                onChange={setDueDate}
                                value={dueDate}
                            />
                        </View>
                        <View style={style.smallInput}>
                            <InputForm
                                label={'CVV'}
                                placeholder={'000'}
                                onChange={setCvv}
                                value={cvv}
                            />
                        </View>
                    </View>
                    <InputForm
                        label={'CEP de cobrança'}
                        placeholder={'Seu CEP'}
                        onChange={setCep}
                        value={cep}
                    />
                </View>

                <LongButton
                    title={'Pagar'}
                    onPress={() => handleOnPress} />
                <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
            </ScrollView>

        </SafeAreaView>
    );
};

export default Payment;
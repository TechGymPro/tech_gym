import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { LongButton } from '../../components/button';
import { Header } from '../../components/header';
import { InputForm } from '../../components/inputFom';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CreditCard from '../../components/creditCard';
import { CircleIcon, Radio, RadioIcon, RadioIndicator } from '@gluestack-ui/themed';

const Payment = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [value, setValue] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const handleOnPress = () => {

    }

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scroll}>
                <Header
                    backButton
                />
                <TitleAndSubtitleCard
                    title={'Pagar plano'}
                    subtitle={'Escolha a forma de pagamento'}
                    marginCustom
                />
                <Radio.Group
                    style={style.radioContainer}
                    accessibilityLabel="payment modes"
                    value={value}
                    onChange={
                        (newValue: any) => setValue(newValue)
                    }>
                    <Radio
                        mb={'$2'}
                        sx={{
                            borderColor: colors.greyBorderColor,
                            backgroundColor: colors.secondary,
                            _icon: {
                                ':checked': {
                                    color: colors.primary,
                                    borderColor: colors.green
                                },
                                color: colors.secondary,
                            },
                            _indicator: {
                                ':checked': {
                                    backgroundColor: colors.primary,
                                    borderColor: colors.greyBorderColor,
                                },
                            },
                        }}
                        value="Boleto">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <Image
                            style={style.radioImg}
                            source={require('../../assets/img/boleto.png')}
                        />
                        <Text>
                            Boleto
                        </Text>
                    </Radio>
                    <Radio
                        mb={'$2'}
                        sx={{
                            borderColor: colors.greyBorderColor,
                            backgroundColor: colors.secondary,
                            _icon: {
                                ':checked': {
                                    color: colors.primary,
                                    borderColor: colors.green
                                },
                                color: colors.secondary,
                            },
                            _indicator: {
                                ':checked': {
                                    backgroundColor: colors.primary,
                                    borderColor: colors.greyBorderColor,
                                },
                            },
                        }}
                        value="Pix">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <Image
                            style={style.radioImg}
                            source={require('../../assets/img/pix.png')}
                        />
                        <Text>
                            Pix
                        </Text>
                    </Radio>
                    <Radio
                        mb={'$2'}
                        sx={{
                            borderColor: colors.greyBorderColor,
                            backgroundColor: colors.secondary,
                            _icon: {
                                ':checked': {
                                    color: colors.primary,
                                    borderColor: colors.green
                                },
                                color: colors.secondary,
                            },
                            _indicator: {
                                ':checked': {
                                    backgroundColor: colors.primary,
                                    borderColor: colors.greyBorderColor,
                                },
                            },
                        }}
                        value="Cartão de crédito">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <Image
                            style={style.radioImg}
                            source={require('../../assets/img/card.png')}
                        />
                        <Text>
                            Cartão de crédito
                        </Text>
                    </Radio>
                </Radio.Group>
                <CreditCard cardName={name} cardCvv={cvv} cardDueDate={dueDate} cardNumber={cardNumber} />
                <View style={style.inputContainer}>
                    <InputForm
                        label={'Número do cartão'}
                        creditCard
                        placeholder={'0000 0000 0000 0000'}
                        onChange={setCardNumber}
                        value={cardNumber}
                    />
                    <InputForm
                        label={'Nome no cartão'}
                        placeholder={'Insira o nome'}
                        onChange={setName}
                        value={name}
                        upperCase
                    />
                    <View style={style.smallInputContainer}>
                        <View style={style.smallInput}>
                            <InputForm
                                label={'Vencimento'}
                                placeholder={'00/00'}
                                onChange={setDueDate}
                                value={dueDate}
                                expireDate
                                maxLength={5}
                            />
                        </View>
                        <View style={style.smallInput}>
                            <InputForm
                                maxLength={3}
                                label={'CVV'}
                                placeholder={'000'}
                                onChange={setCvv}
                                value={cvv}
                                isNumber
                            />
                        </View>
                    </View>
                    <InputForm
                        label={'CEP de cobrança'}
                        placeholder={'Seu CEP'}
                        onChange={setCep}
                        value={cep}
                        zipCode
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
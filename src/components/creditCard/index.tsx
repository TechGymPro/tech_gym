import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { style } from './style';
import { creditCardType } from '../../../utils/indext';

interface Props {
    cardNumber: string;
    cardName: string;
    cardDueDate: string;
    cardCvv: string;
}

const CreditCard: React.FC<Props> = ({ cardCvv, cardDueDate, cardName, cardNumber }) => {
    const [creditCardFlag, setCreditCardFlag] = useState<false | 'MASTERCARD' | 'VISA'>(false);

    useEffect(() => {
        let result = creditCardType(cardNumber.replace(/\s/g, ''));
        setCreditCardFlag(result);
    }, [cardNumber]);
    return (
        <View style={style.container}>
            <View style={style.card}>
                <View style={style.flagView}>
                    {creditCardFlag === false || creditCardFlag === 'MASTERCARD'
                        ?
                        (<Image style={style.flagMaster} source={require('../../assets/img/master-icon.png')} />)
                        :
                        (<Image style={style.flagVisa} source={require('../../assets/img/visa-icon.png')} />)
                    }
                    <Image style={style.contactless} source={require('../../assets/img/contactless.png')} />
                </View>
                <View style={style.numberView}>
                    <Text style={style.normalCardTextMain}>{cardNumber ? cardNumber : '**** **** **** ****'}</Text>
                    <Text style={style.normalCardTextMain}>{cardDueDate ? cardDueDate : '**/**'}</Text>
                </View>
                <View style={style.namespaceView}>
                    <Text style={style.bigCardTextMain}>{cardName ? cardName : '**** ****'}</Text>
                    <Text style={style.normalCardTextMain}>{cardCvv ? cardCvv : '***'}</Text>
                </View>
            </View>
        </View>
    );
};

export default CreditCard;

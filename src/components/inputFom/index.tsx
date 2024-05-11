import React from 'react';
import {Text, TextInput, View} from 'react-native';
import MaskInput, {Masks} from 'react-native-mask-input';
import {maskOnlyNumbers} from '../../../utils/masks';
import colors from '../../global/colors';
import {style} from './style';

interface Props {
  label: string;
  placeholder: string;
  secure?: boolean;
  onChange: (value: string) => void;
  value: string;
  time?: boolean;
  height?: boolean;
  weight?: boolean;
  weightRegx?: boolean;
}

export const InputForm: React.FC<Props> = ({
  label,
  placeholder,
  secure,
  onChange,
  value,
  time,
  height,
  weight,
  weightRegx,
}) => {
  return (
    <View style={style.container}>
      {time ? (
        <>
          <Text style={style.InputLabel}>{label}</Text>
          <MaskInput
            value={value}
            onChangeText={masked => onChange(masked)}
            mask={Masks.DATE_DDMMYYYY}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            style={style.input}
          />
        </>
      ) : height ? (
        <>
          <Text style={style.InputLabel}>{label}</Text>
          <MaskInput
            value={value}
            onChangeText={masked => onChange(masked)}
            mask={[/\d/, '.', /\d/, /\d/]}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            style={style.input}
          />
        </>
      ) : weightRegx ? (
        <>
          <Text style={style.InputLabel}>{label}</Text>
          <MaskInput
            value={value}
            onChangeText={masked => {
              const numberMasked = maskOnlyNumbers(masked);
              //   console.log(masked, 'masked');
              //   console.log(numberMasked, 'numberMasked');
              //   console.log(
              //     Number((Number(numberMasked) / 1000).toFixed(3)),
              //     'masked aa',
              //   );
              //   console.log(onChange(masked));
              const valueMask = Number(Number(numberMasked) / 1000);
              console.log(valueMask.toFixed(3), 'valueMask');
              return onChange(valueMask ? `${valueMask.toFixed(3)}` : '');
            }}
            // mask={[/\d/, /\d/, /\d/, ',', /\d/, /\d/, /\d/]}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            style={style.input}
          />
        </>
      ) : weight ? (
        <>
          <Text style={style.InputLabel}>{label}</Text>
          <MaskInput
            value={value}
            onChangeText={masked => onChange(masked)}
            mask={[/\d/, /\d/, '.', /\d/]}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            style={style.input}
          />
        </>
      ) : (
        <>
          <Text style={style.InputLabel}>{label}</Text>
          <TextInput
            secureTextEntry={secure}
            style={style.input}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            value={value}
            onChangeText={e => onChange(e)}
          />
        </>
      )}
    </View>
  );
};

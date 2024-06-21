import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { style } from "./style";

interface SwitchProps {
    text: string;
}

const SwitchItem: React.FC<SwitchProps> = ({ text }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={style.container}>
            <Text style={style.tittle}>{text}</Text>
            <View>
                <Switch
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    trackColor={{ false: '#E3E8F2', true: '#FBBA00' }}
                    thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
};

export default SwitchItem;
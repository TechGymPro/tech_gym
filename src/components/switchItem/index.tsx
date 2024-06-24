import { useState } from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-switch";
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
                    value={isEnabled}
                    disabled={false}
                    renderActiveText={false}
                    renderInActiveText={false}
                    changeValueImmediately={true}
                    backgroundActive={'#FBBA00'}
                    backgroundInactive={'#E3E8F2'}
                    circleSize={22}
                    circleBorderWidth={0}
                    barHeight={28}
                    switchWidthMultiplier={2.4}
                    onValueChange={toggleSwitch}
                    switchRightPx={2}
                    switchLeftPx={2}
                />
            </View>
        </View>
    );
};

export default SwitchItem;

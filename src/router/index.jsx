import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../view/login';
import Dashboard from '../view/dashboard';
import Notifications from '../view/notifications';
import EditUserInformation from '../view/editUserInformation/indext';
import Measurements from '../view/measurements/dashboard';
import MeasurementsEdit from '../view/measurements/edit';
import Training from '../view/training';
import TrainingPlay from '../view/trainingPlay';

const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditUserInformation"
          component={EditUserInformation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Measurements"
          component={Measurements}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MeasurementsEdit"
          component={MeasurementsEdit}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Training"
          component={Training}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TrainingPlay"
          component={TrainingPlay}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

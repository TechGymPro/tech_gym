/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../view/dashboard';
import Notifications from '../view/notifications';
import EditUserInformation from '../view/editUserInformation/indext';
import Measurements from '../view/measurements/measurementsGraph';
import MeasurementsEdit from '../view/measurements/edit';
import Training from '../view/training';
import TrainingPlay from '../view/trainingPlay';
import VerifyAcademy from '../view/verifyAcademy';
import InfosII from '../view/infosII';
import Agreement from '../view/agreement';
import RegisterConcluded from '../view/registerConcluded';
import InfosIV from '../view/infosIV';
import InfosIII from '../view/infosIII';
import InfosI from '../view/infosI';
import GetEmail from '../view/getEmail';
import RegisterWelcome from '../view/registerWelcome';
import VerifyPhone from '../view/verifyPhone';
import VerifyMail from '../view/verifyMail';
import InitialScreen from '../view/initialScreen';
import SignUp from '../view/signUp';
import PropositionOptions from '../view/propositionOptions';
import Payment from '../view/payment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../global/auth';
import colors from '../global/colors';
import { units } from '../hooks/hooks';
import { TabBarIconComponent } from './component/tabBarIconComponent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Router = () => {
  const { userToken, loading } = useAuth();

  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      {userToken ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PropositionOptions"
            component={PropositionOptions}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Agreement"
            component={Agreement}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterConcluded"
            component={RegisterConcluded}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InfosIV"
            component={InfosIV}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InfosIII"
            component={InfosIII}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InfosII"
            component={InfosII}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InfosI"
            component={InfosI}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="VerifyAcademy"
            component={VerifyAcademy}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="VerifyPhone"
            component={VerifyPhone}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VerifyMail"
            component={VerifyMail}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="GetEmail"
            component={GetEmail}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterWelcome"
            component={RegisterWelcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
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
            name="MeasurementsEdit"
            component={MeasurementsEdit}
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
      ) : (
        <>
          <Stack.Navigator initialRouteName="AuthenticatedDashboard">
            <Stack.Screen
              name="AuthenticatedDashboard"
              component={AuthenticatedDashboard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

const AuthenticatedDashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.tabBarNavColor,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: (units.vh * 7.8) / 2,
          height: units.vh * 7.8,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (<TabBarIconComponent focused={focused} label="Home" iconName="home" size={size} />),
        }}
      />
        <Tab.Screen
          name="Training"
          component={Training}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, focused }) => (<TabBarIconComponent focused={focused} label="Treino" iconName="training" size={size} />),
          }}
        />
      <Tab.Screen
        name="Measurements"
        component={Measurements}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (<TabBarIconComponent focused={focused} label="Peso" iconName="data" size={size} />),
        }}
      />
    </Tab.Navigator>
  );
};

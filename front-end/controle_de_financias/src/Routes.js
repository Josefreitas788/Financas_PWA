import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{ createStackNavigator } from "@react-navigation/stack";

// import { createStackNavigator, createAppContainer } from "react-navigation";
import Welcome from './screens/Welcome/index'
import Login from './screens/Login/index'

const Stack = createStackNavigator();

function AuthRoutes() {
    return(
        <Stack.Navigator headerMode="none" initialRouteName="welcome">
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;
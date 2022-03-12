import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Quize from '../Screens/quize';
import Result from '../Screens/Result';
import Colors from '../utils/Colors';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return  (
        <NavigationContainer>
            
            <Stack.Navigator            
            >
                <Stack.Screen
                     options={{
                      
                        headerShown:false,
                    
                    }}
                    component={Quize} name="quize" />
                    <Stack.Screen 
                    options={{
                        title: 'Home',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor:  Colors.coreBlue,                     
                        },
                        headerShown:false,
                    
                    }}
                    component={Home} 
                    name="home"
                     />
                    
                    <Stack.Screen component={Result} name="result" />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default HomeStack;
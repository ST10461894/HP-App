
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';


import Welcome from './Welcomescreen'; 
import Coursemenu from './Coursemenu'; 
import Homescreen from './Homescreen';


type RootStackParamList = {
  Welcome: undefined; 
  Coursemenu: { menuItems: any[] }; 
  Homescreen: undefined; 
};


const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Coursemenu" component={Coursemenu} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

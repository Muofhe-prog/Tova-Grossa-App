import * as React from 'react';
import { View, Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import Cart from './src/Screens/Cart';
import { Provider } from 'react-redux';
import {Store} from "./Redux/Store";
import Orderplaced from './src/Screens/Orderplaced';
import Welcome from './src/Screens/Welcome';
import Forgotpassword from './src/Screens/Forgotpassword';
import Tabs from './src/Screens/Tabs';


      


        const Stack = createNativeStackNavigator();
       const App = () => {
      return(
        <Provider store={Store}>
         <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
        
        
        >
          
          <Stack.Screen name="Splash" component={Splash} />
    
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Orderplaced" component={Orderplaced} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="ForgotPassword" component={Forgotpassword} />
          <Stack.Screen name="Tabs" component={Tabs} />

        </Stack.Navigator>
      </NavigationContainer>

        </Provider>
        
      )
      
      }
      
      export default App
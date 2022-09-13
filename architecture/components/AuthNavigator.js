import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/intro';
import { Home } from '../screens/HomeScreen'
import { Popular } from '../screens/Popular';
import { Theme } from '../Theme/Theme';
import { Order } from '../screens/Order';
import { Signin } from '../screens/Signin';
import { Signup } from '../screens/Signup';
import { Checkout } from '../screens/Checkout';
import { Pay } from '../screens/Pay';
import { About } from '../screens/About';

export function AuthNavigator(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={Intro}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Signin' component={Signin}/>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Checkout' component={Checkout}/>
            <Stack.Screen name='Pay' component={Pay}/>
            <Stack.Screen name='Order' component={Order} options={{headerShown:true}}/>
            <Stack.Screen name='Popular' component={Popular} options={{
                headerShown:true,
                title:'From Popular Pizzas',
                headerStyle:{
                    backgroundColor:Theme.colors.ui.success
                },
                headerTintColor:'#C1F4C5',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:20
                },
                headerBackTitle:'Go back'
                }} />
        </Stack.Navigator>
    )
}
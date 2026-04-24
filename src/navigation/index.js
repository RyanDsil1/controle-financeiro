import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../screens/login";
import home from "../screens/home";
import novamovimentacao from "../screens/novamovimentacao";
import { StackScreen } from "react-native-screens";

const stack = createNativeStackNavigator();
export default function Router(){
    return (
        <NavigationContainer>
            <stack.Navigator>
              <stack.Screen  name="login"component={login}/>
              <stack.Screen name="home"component={home}/>
              <stack.Screen name="novamovimentacao"component={novamovimentacao}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
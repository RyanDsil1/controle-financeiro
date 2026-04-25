import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Home from "../screens/home";
import Novamovimentacao from "../screens/novamovimentacao";
// ← remover o import de StackScreen, não existe

const Stack = createNativeStackNavigator();  // ← Stack maiúsculo
export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="novamovimentacao" component={Novamovimentacao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
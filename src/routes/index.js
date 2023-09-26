import { createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../redirect/LoginScreen'
import Navegador from '../redirect/Navegador';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="Navegador"
            component={Navegador}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
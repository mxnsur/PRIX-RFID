import { createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../redirect/LoginScreen'
import Navegador from '../redirect/Navegador';
import LoseTag from '../../src/pages/abas/LoseTag'

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
            
            <Stack.Screen
            name="LoseTag"
            component={LoseTag}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
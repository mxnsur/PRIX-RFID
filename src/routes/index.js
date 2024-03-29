import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../redirect/LoginScreen';
import Navegador from '../redirect/Navegador';
import SolicitarTag from '../pages/abas/SolicitarTag';
import Feedback from '../pages/abas/Feedback';
import Perfil from '../pages/abas/Perfil';

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
            name="SolicitarTag"
            component={SolicitarTag}
            />
            
            <Stack.Screen
            name="Feedback"
            component={Feedback}
            />
            
            <Stack.Screen
            name="Perfil"
            component={Perfil}
            />
        </Stack.Navigator>
    )
}
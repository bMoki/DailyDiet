
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feedback } from '@screens/Feedback';
import { Stats } from '@screens/Stats';
import { Form } from '@screens/Form';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='form'
                component={Form}
            />
            <Screen
                name='stats'
                component={Stats}
            />
            <Screen
                name='feedback'
                component={Feedback}
            />
            <Screen
                name='meal'
                component={Meal}
            />

        </Navigator>
    )
}
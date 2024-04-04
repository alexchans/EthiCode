import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import AboutUs from './AboutUs';
import EQ from './EQ';
import Result from './Result';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About Us' component={AboutUs} />
        <Stack.Screen name='Ethical Question' component={EQ} />
        <Stack.Screen name='Result' component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import EQ from './EQ'; // Update with the correct path
// import Result from './Result';

// const Stack = createStackNavigator();

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="EQ">
//                 <Stack.Screen name='Ethical Question' component={EQ} />
//                 <Stack.Screen name='Result' component={Result} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// export default App;
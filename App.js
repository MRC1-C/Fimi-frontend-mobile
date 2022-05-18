import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { router } from './src/routes';
import SplashScreen from './src/views/screens/SplashScreen';
import logoleft from './assets/image/Vector.png'
import logoright from "./assets/image/logo1.png"
import { Image,Text, StyleSheet, View } from 'react-native';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20
  },
  logoLeft: {
    height: 32,
    width: 90,
  },
  headerRight: {
    marginRight: 20
  }
});


const TabMain = () => {
  return <Tab.Navigator>
    {
      router.map((item, id) =>
        <Tab.Screen key={id} name={item.name} component={item.component} options={{
          headerLeft: () => <View style={styles.headerLeft}><Image source={logoright} style={styles.logoLeft}/></View> ,
          headerTitle: "",
          headerRight: () => <View style={styles.headerRight}><Image source={logoleft} /></View> ,
          tabBarIcon: item.icon,
          tabBarLabelStyle: {
            fontWeight: '900'
          }
        }} />
      )
    }
  </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false}} >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="main" component={TabMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


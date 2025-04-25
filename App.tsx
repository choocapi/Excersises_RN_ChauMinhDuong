import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPasswordScreen, LoginScreen, RegisterScreen } from './screens/Excersise3';
import { PaperProvider } from 'react-native-paper';
import CustomNavigationBar from './components/CustomNavigationBar';
import { DetailsScreen, HomeScreen, ProfileScreen } from './screens/Excersise4';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerBar from './components/CustomDrawerBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const getTabBarIcon = (icon: any) => ({ color }: any) => <MaterialIcons name={icon} size={26} style={{ color }} />;


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Lab4_BottomNav' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Lab3" component={Lab3} />
          <Stack.Screen name="Lab4" component={Lab4} />
          <Stack.Screen name='Lab4_DrawerNav' component={Lab4_DrawerNav} />
          <Stack.Screen name='Lab4_BottomNav' component={Lab4_BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const Lab4 = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{header: (props: any) => <CustomNavigationBar {...props} />}}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

const Lab4_DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={(props: any) => <CustomDrawerBar {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  )
}

const Lab4_BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'gray' }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: getTabBarIcon('home') }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: getTabBarIcon('person') }} />
      <Tab.Screen name="Details" component={DetailsScreen} options={{ tabBarIcon: getTabBarIcon('info') }} />
    </Tab.Navigator>
  )
}

const Lab3 = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  )
}

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Home from './src/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from './src/Search';
import News from './src/News';
const Tab = createBottomTabNavigator();


export default function App() {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'Casos') {
        iconName = 'heart';
      } else if (route.name === 'Prevenção') {
        iconName = 'heart';
      } else if (route.name === 'Notícias') {
        iconName = 'price-tag';
      } else if (route.name === 'Ajuda') {
        iconName = 'bell';
      }

      // You can return any component that you like here!
      return <Entypo name={iconName} size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: '#FB7200',
          inactiveTintColor: '#464962',
        }}>
        <Tab.Screen name="Casos" component={Home} />
        <Tab.Screen name="Prevenção" component={Search} />
        <Tab.Screen name="Notícias" component={News} />
        <Tab.Screen name="Ajuda" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

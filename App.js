import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskScreen from './screens/TaskScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import ArticleScreen from './screens/ArticleScreen';

const Stack = createNativeStackNavigator()

function TodoScreen() {
  return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tasks" component={TaskScreen}/>
    <Stack.Screen name="Add Task" component={AddTaskScreen}/>
  </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Todos") {
              iconName = focused
                ? 'clipboard'
                : 'clipboard-outline';
            } else if (route.name === 'Articles') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name ="Todos" component={TodoScreen}/>
        <Tab.Screen name ="Articles" component={ArticleScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
      
  );
}

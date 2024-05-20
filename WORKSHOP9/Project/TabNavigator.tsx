import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BasketScreen from "../screens/BasketScreen";
import HomeIcon from "../components/common/Icons/HomeIcon";
import BasketIcon from "../components/common/Icons/BasketIcon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ContactScreen from "../screens/ContactScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

type TabNavigatorParamsList = {
  HomeStack: undefined;
  BasketStack: undefined;
};

export type StacksParamsList = {
  HomeScreen: undefined;
  BasketScreen: undefined;
  ContactScreen: undefined;
  CheckoutScreen: undefined;
  ProductsScreen: undefined;
  ProductsDetailScreen: { category: string };
};

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const BasketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasketScreen" component={BasketScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeStack}
        name="HomeStack"
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        component={BasketStack}
        name="BasketStack"
        options={{
          tabBarIcon: BasketIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

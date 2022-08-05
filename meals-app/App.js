import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailComponent from "./screens/MealDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Drawernavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <FavoritesContextProvider>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backGroundColor: "white" },
              headerTintColor: "black",
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={Drawernavigator}
              options={{ title: "All Categories" }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{ title: "Meals" }}
            />
            <Stack.Screen name="MealDetail" component={MealDetailComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

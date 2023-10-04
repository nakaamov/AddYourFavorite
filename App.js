import { StyleSheet } from "react-native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconButton from "./ui/IconButton";
import { useFonts } from "expo-font";
import Map from "./screens/Map";

const stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    poppinsregular: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsmedium: require("./assets/fonts/Poppins-Medium.ttf"),
    poppinsitalic: require("./assets/fonts/Poppins-Italic.ttf"),
    poppinsmediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#0DB806" },
            headerTintColor: "black",
            contentStyle: { backgroundColor: "#f5f5f5" },
          }}
        >
          <stack.Screen
            component={AllPlaces}
            name="AllPlaceScreen"
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: () => (
                <IconButton
                  style={{ marginLeft: 6 }}
                  name="add-circle"
                  size={28}
                  color="black"
                  onPress={() => navigation.navigate("AddPlaceScreen")}
                />
              ),
            })}
          />
          <stack.Screen
            component={AddPlace}
            name="AddPlaceScreen"
            options={{
              title: "",
            }}
          />
          <stack.Screen component={Map} name="MapScreen" />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

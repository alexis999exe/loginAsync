// Importamos React para usar componentes.
import React from "react";

// Importamos el contenedor de navegación de React Navigation.
import { NavigationContainer } from "@react-navigation/native";

// Importamos la función para crear un Stack Navigator.
import { createStackNavigator } from "@react-navigation/stack";

// Importamos las pantallas que se usarán en la navegación.
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

// Creamos una instancia del Stack Navigator.
const Stack = createStackNavigator();

// Definimos el componente principal de la aplicación.
export default function App() {
  return (
    // NavigationContainer es el contenedor que gestiona la navegación en la app.
    <NavigationContainer>
      {/* Stack.Navigator es el componente que define la pila de pantallas */}
      <Stack.Navigator initialRouteName="Login">
        {/* Stack.Screen agrega una pantalla a la pila de navegación */}
        {/* La pantalla "Login" muestra el componente LoginScreen */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* La pantalla "Home" muestra el componente HomeScreen */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

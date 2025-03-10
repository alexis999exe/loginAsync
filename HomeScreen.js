// Importamos React para poder usar componentes funcionales.
import React from "react";

// Importamos componentes básicos de React Native.
import { View, Text, Button } from "react-native";

// Importamos AsyncStorage para manejar el almacenamiento local de datos.
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definimos el componente HomeScreen, que recibe la propiedad `navigation`.
const HomeScreen = ({ navigation }) => {
  
  // Función para cerrar sesión.
  const handleLogout = async () => {
    // Eliminamos el dato almacenado del usuario en AsyncStorage.
    await AsyncStorage.removeItem("user");

    // Reemplazamos la pantalla actual con la pantalla de Login.
    navigation.replace("Login");
  };

  return (
    // View actúa como un contenedor principal para los elementos.
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      {/* Texto de bienvenida en la pantalla principal. */}
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bienvenido</Text>
      
      {/* Botón para cerrar sesión, que ejecuta handleLogout al presionarlo. */}
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    
    </View>
  );
};

// Exportamos el componente para que pueda ser usado en la navegación.
export default HomeScreen;

// Importamos React y los hooks useState y useEffect.
import React, { useState, useEffect } from "react";

// Importamos componentes de React Native.
import { View, Text, TextInput, Button, Alert } from "react-native";

// Importamos AsyncStorage para el almacenamiento local de datos.
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definimos el componente LoginScreen, que recibe la propiedad `navigation` para manejar la navegación.
const LoginScreen = ({ navigation }) => {
  
  // Estados para almacenar el usuario y la contraseña ingresados por el usuario.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Estado para verificar si el usuario ya está autenticado.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect se ejecuta al montar el componente para verificar si el usuario ya está autenticado.
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Función para verificar si hay una sesión iniciada.
  const checkLoginStatus = async () => {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
      navigation.replace("Home"); // Si hay un usuario guardado, redirige a la pantalla Home.
    }
  };

  // Función que maneja el inicio de sesión.
  const handleLogin = async () => {
    // Verifica si el usuario y la contraseña son correctos.
    if (username === "admin" && password === "1234") {
      // Guarda el usuario en AsyncStorage.
      await AsyncStorage.setItem("user", username);
      setIsLoggedIn(true);

      // Redirige a la pantalla Home.
      navigation.replace("Home");
    } else {
      // Muestra una alerta si el usuario o la contraseña son incorrectos.
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    // Contenedor principal con estilos para centrar los elementos.
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      
      {/* Título de la pantalla */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Iniciar Sesión
      </Text>

      {/* Campo de entrada para el usuario */}
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      {/* Campo de entrada para la contraseña */}
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Oculta la contraseña al escribir.
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      {/* Botón para iniciar sesión */}
      <Button title="Ingresar" onPress={handleLogin} />
    
    </View>
  );
};

// Exportamos el componente para que pueda ser usado en la navegación.
export default LoginScreen;

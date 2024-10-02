import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !rut || !password || !confirmPassword) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    // Lógica para manejar el registro del usuario, por ejemplo, llamar a una API
    Alert.alert("Registro exitoso", `Nombre: ${name}\nEmail: ${email}`);
  };

  return (
    <LinearGradient
      // Colores del degradado de izquierda a derecha
      colors={["#b6c0e8", "#ffcccb"]}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {/* Imagen sobre el fondo desde assets */}
      <Image
        source={require("../../../assets/images/login-arbol.png")} // Reemplaza con la ruta de tu imagen
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.container}>
        <Text style={styles.title}>Regístrate</Text>

        <TextInput
          style={styles.input}
          placeholder="RUT"
          placeholderTextColor="#aaa"
          value={rut}
          onChangeText={setRut}
          keyboardType="default"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          placeholderTextColor="#aaa"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("Navegar", "Ir a iniciar sesión")}
        >
          <Text style={styles.linkText}>
            ¿Ya tienes una cuenta? Inicia sesión
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Ajusta el ancho de la imagen
    height: 700, // Ajusta el alto de la imagen
    position: "absolute", // Colocar la imagen sobre el fondo
    top: 0, // Ajusta esta propiedad para cambiar la posición vertical
    opacity: 0.5,
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 100, // Ajusta este valor para dejar espacio suficiente para la imagen
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#ff9999",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
    width: "80%",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#000000",
    textAlign: "center",
    marginTop: 10,
  },
});

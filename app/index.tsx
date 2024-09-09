import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView, // Import ScrollView
} from "react-native";
import { useWindowDimensions } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const App = () => {
  const { width, height } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);

  useEffect(() => {
    const onChange = ({
      window,
    }: {
      window: { width: number; height: number };
    }) => {
      setIsPortrait(window.height > window.width);
    };

    const subscription = Dimensions.addEventListener("change", onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  const buttonWidth = isPortrait ? width / 2 - 20 : width / 4 - 20;
  const imageWidth = width * 0.8;
  const imageHeight = imageWidth * (9 / 16);

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar
        style={isPortrait ? "dark" : "light"}
        backgroundColor={isPortrait ? "#fff" : "#000"}
      />

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={{ flex: 1 }}
        horizontal={false} // Cho phép cuộn dọc
        contentOffset={{ x: 0, y: 0 }}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/7f/5a/09/7f5a09ba85f719b7f6c288098fb38aaa.jpg",
          }}
          style={{ width: imageWidth, height: imageHeight, marginBottom: 20 }}
          resizeMode="contain"
        />

        <KeyboardAvoidingView
          style={{ flex: 1, width: "100%" }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <TextInput placeholder="Đây là ai??" style={styles.input} />

          <View
            style={[
              styles.buttonContainer,
              isPortrait ? styles.column : styles.row,
            ]}
          >
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.buttonText}>Klee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.buttonText}>CỜ lI</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.buttonContainer,
              isPortrait ? styles.column : styles.row,
            ]}
          >
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.buttonText}>KLI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.buttonText}>KỜ LEE</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  button: {
    paddingVertical: 15,
    backgroundColor: "#6200ea",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;

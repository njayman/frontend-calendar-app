import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Home</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation?.navigate("Calendar")}
      >
        <Text style={styles.buttonText}>Go to your calendar scheduler</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#123456",
    padding: 10,
  },
  buttonText: {
    color: "#ffffff",
  },
});

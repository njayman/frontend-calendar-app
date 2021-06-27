import React from "react";
import { Button, StyleSheet, View } from "react-native";

const Navigation = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Home"
        onPress={() => navigation?.navigate("Home", { name: "Najish" })}
      />
      <Button
        title="Calendar"
        onPress={() => navigation?.navigate("Calendar", { name: "Najish" })}
      />
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

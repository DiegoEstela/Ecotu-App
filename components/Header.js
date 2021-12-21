import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/Colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.GREEN,
    paddingTop: 20,
    textAlign: "center",
    color: "white",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 15,
    textAlign: "center",
    flexDirection: "row",
  },
});

export default Header;

import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function AddActivityScreen() {
  return (
    <View>
      <Text>Add Activity Screen</Text>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go back</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D00414",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
  },
});

import { Link } from "expo-router";
import { Alert, Pressable, Text, View, StyleSheet } from "react-native";

export default function Homescreen() {
  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}>Index</Text>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add activity</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
  },
});

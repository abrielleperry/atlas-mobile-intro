import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function AddActivityScreen() {
  const [steps, setSteps] = useState<number>(0);
  const {insertActivity} = useActivitiesContext();
  return (
    <View style={styles.container}>
      <Text>Add Activity Screen</Text>
      <TextInput
        placeholder="Enter steps"
        keyboardType="number-pad"
        onChangeText={(value) => setSteps(parseInt(value))}
      />
      <Pressable
        style={styles.addButton}
        onPress={() => {
          insertActivity(steps, new Date());
          router.push("/");
        }}
      >
        <Text style={styles.buttonText}>Add activity</Text>
      </Pressable>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go back</Text>
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
  addButton: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#D00414",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

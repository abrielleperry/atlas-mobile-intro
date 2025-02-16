import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function AddActivityScreen() {
  const [steps, setSteps] = useState<number>(0);
  const { insertActivity } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <Text style={styles.addActivityScreen}>Add Activity</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter steps"
        keyboardType="number-pad"
        onChangeText={(value) => setSteps(parseInt(value))}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.addButton}
          onPress={() => {
            insertActivity(steps, new Date());
            router.push("/");
          }}
        >
          <Text style={styles.buttonText}>Add Activity</Text>
        </Pressable>
        <Link style={styles.backButton} href={"/"} replace>
          <Text style={styles.buttonText}>Go Back</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: "#FEF9E6",
  },
  input: {
    padding: 16,
    width: "100%",

    backgroundColor: "white",
    color: "black",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 12,
    fontSize: 16,
  },
  addActivityScreen: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: "#D00414",
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

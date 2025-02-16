import React from "react";
import { Pressable, Text, StyleSheet, Alert } from "react-native";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function DeleteAllButton() {
  const { deleteAllActivities } = useActivitiesContext();

  return (
    <Pressable
      style={styles.deleteButton}
      onPress={() => {
        deleteAllActivities();
        Alert.alert("All activities deleted");
      }}
    >
      <Text style={styles.buttonText}>Delete All</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "#D00414",
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

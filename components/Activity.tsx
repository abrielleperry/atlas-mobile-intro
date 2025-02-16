import { Text, View, StyleSheet } from "react-native";

export default function Activity({ activity }) {
  return (
    <View style={styles.activityContainer}>
      <Text style={styles.dateText}>
        {new Date(activity.date).toLocaleDateString()}
      </Text>
      <Text style={styles.stepsText}>Steps: {activity.steps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFFEFE",
    margin: 8,
    borderRadius: 8,
  },
  dateText: {
    fontSize: 13,
    paddingBottom: 8,
  },
  stepsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

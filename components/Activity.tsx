import { Text, View, StyleSheet, Pressable } from "react-native";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Swipeable } from "react-native-gesture-handler/ReanimatedSwipeable";

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

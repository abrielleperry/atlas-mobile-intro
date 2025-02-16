import { StyleSheet, Text, View, Pressable } from "react-native";
import Activity from "./Activity";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { useCallback } from "react";

export default function SwipableActivity({ activity }: { activity: any }) {
  const { deleteActivity } = useActivitiesContext();

  const handleDelete = useCallback(() => {
    deleteActivity(activity.id);
  }, [activity.id, deleteActivity]);

  const renderDeleteAction = useCallback(
    () => (
      <View style={styles.actionContainer}>
        <Pressable onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    ),
    [handleDelete]
  );

  return (
    <View style={styles.container}>
      <ReanimatedSwipeable
        friction={2}
        overshootFriction={8}
        renderLeftActions={renderDeleteAction}
        renderRightActions={renderDeleteAction}
      >
        <View>
          <Activity activity={activity} />
        </View>
      </ReanimatedSwipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    width: "100%",
  },
  activityWrapper: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  actionContainer: {
    justifyContent: "center",
    width: 80,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#D00414",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: "100%",
    width: "100%",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

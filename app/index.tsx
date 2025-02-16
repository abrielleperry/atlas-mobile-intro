import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { Alert, Text, View, StyleSheet, Pressable } from "react-native";
import Activity from "@/components/Activity";
import { FlashList } from "@shopify/flash-list";

export default function Index() {
  const { activities, deleteAllActivities } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlashList
          data={activities}
          renderItem={({ item }) => <Activity activity={item} />}
          estimatedItemSize={50}
          refreshing={false}
          onRefresh={() => Alert.alert("Refresh")}
          onEndReached={() => Alert.alert("End reached")}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.flashList}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Link href="/add-activity-screen" replace>
            <Text style={styles.buttonText}>Add activity</Text>
          </Link>
        </Pressable>
        <Pressable
          style={[styles.button, styles.deleteButton]}
          onPress={() => {
            deleteAllActivities();
            Alert.alert("All activities deleted");
          }}
        >
          <Text style={styles.buttonText}>Delete All</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: "#FEF9E6",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  flashList: {
    paddingBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    gap: 10,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "#D00414",
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

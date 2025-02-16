import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { Alert, Text, View, StyleSheet, Pressable } from "react-native";
import SwipableActivity from "@/components/SwipableActivity";
import { FlashList } from "@shopify/flash-list";
import DeleteAllButton from "@/components/DeleteAllButton";

export default function Index() {
  const { activities } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlashList
          data={activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SwipableActivity activity={item} />}
          estimatedItemSize={60}
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
        <DeleteAllButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingTop: 50,
    backgroundColor: "#FEF9E6",
  },
  list: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
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
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
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

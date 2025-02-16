import { DatabaseProvider } from "@/components/DatabaseProvider";
import { ActivitiesProvider } from "@/components/ActivitiesProvider";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <DatabaseProvider>
      <ActivitiesProvider>
        <GestureHandlerRootView>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="add-activity-screen"
              options={{ headerShown: false }}
            />
          </Stack>
        </GestureHandlerRootView>
      </ActivitiesProvider>
    </DatabaseProvider>
  );
}

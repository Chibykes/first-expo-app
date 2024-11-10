import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DayListItem from "@/components/days/DayListItem";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  let days = [...Array(24)].map((_, index) => ++index);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={2}
          data={days}
          renderItem={({ item }) => <DayListItem item={item} />}
        />
      </View>

      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack> */}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  contentContainer: {
    gap: 10,
    padding: 10,
  },

  columnWrapper: {
    gap: 10,
  },

  box: {
    backgroundColor: "#9290C3",
    borderWidth: StyleSheet.hairlineWidth,
    // width: 300,
    // height: 300,
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  text: {
    color: "#070F2B",
    fontSize: 64,
  },
});

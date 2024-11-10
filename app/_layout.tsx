import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { ActivityIndicator, Text } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, fontLoadError] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    DMSans400: require("../assets/fonts/DMSans-Regular.ttf"),
    DMSans500: require("../assets/fonts/DMSans-SemiBold.ttf"),
    DMSans600: require("../assets/fonts/DMSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontLoaded || fontLoadError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontLoadError]);

  if (!fontLoaded && !fontLoadError) {
    return <ActivityIndicator />;
  }

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    // </ThemeProvider>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Expo Training",
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#070F2B" },
        }}
      />
      <Stack.Screen name="(days)/day1" options={{ title: "Day 1" }} />
    </Stack>
  );
}

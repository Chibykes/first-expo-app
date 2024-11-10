import { Href, Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function DayListItem({ item }: { item: number }) {
    const link = `/(days)/day${item}` as Href<string>;
  return (
    <Link href={link} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{item}</Text>
      </Pressable>
    </Link>
    // <View style={styles.box}>
    //   <Text style={styles.text}>{item}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: "DMSans600",
  },
});

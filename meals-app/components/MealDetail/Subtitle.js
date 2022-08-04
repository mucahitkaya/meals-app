import { Text, View, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}> {children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
    margin: 6,
  },
  subtitleContainer: {
    borderBottomColor: "#ccc",
    marginHorizontal: 12,
    borderBottomWidth: 2,
  },
});

import { Pressable, View } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable>
        {/* for styling view */}
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
          }}
        >
          Conheça meus gatitos clicando no menu lateral.
        </Text>
      </View>
    </View>
  );
}

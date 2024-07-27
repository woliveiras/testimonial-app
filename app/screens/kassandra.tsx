import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";

export default function Kassandra() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Kassandra Helenna</Text>
      </View>
      <View>
        <Text style={styles.text}>Kassandra é uma gata muito ocupada.</Text>
        <Text style={styles.text}>
          Todos os dias ela executa uma série de tarefas de seu todo list, como:
        </Text>
        <FlatList
          style={styles.list}
          data={[
            { key: "Gritar com Kléber Maurício" },
            { key: "Gritar com Olga" },
            { key: "Gritar com Geremmyas" },
            { key: "Gritar comigo" },
            { key: "Gritar com a mãe dela" },
          ]}
          renderItem={({ item, index }) => (
            <Text style={styles.text}>
              {index + 1} {item.key}
            </Text>
          )}
        />
        <Text style={styles.text}>
          Kassandra é uma gata com muitas responsabilidades.
        </Text>
        <Text style={styles.text}>
          Agora Kassandra,{" "}
          <Text style={styles.strong}>com sua nova caneta BIC</Text>, costuma
          proteger a casa de possíveis ameaças. Gritando por aí com a caneta em
          punho e a cabeça ao alto.
        </Text>
      </View>
    </View>
  );
}

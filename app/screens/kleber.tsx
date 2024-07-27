import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Kleber() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Kléber Maurício</Text>
      </View>
      <View>
        <Text style={styles.text}>Kléber é um gatão bem legal.</Text>
        <Text style={styles.text}>
          Quando os novos gatinhos chegaram, ele sempre tentou cuidar deles como
          se fosse um irmão mais velho.
        </Text>
        <Text style={styles.text}>
          Até que a Olga chegou e, agora, além de irmão mais velho, ele é um pau
          mandado da irmã mais nova.
        </Text>
        <Text style={styles.text}>
          Kléber não tem muitas ambições na vida, apesar de já ter demonstrado
          interesse em publicidade e propaganda. Porém, se pudesse eleger algo
          que sempre vai me lembrar a esse cara, é o{" "}
          <Text style={styles.strong}>mamãozinho</Text>.
        </Text>
      </View>
    </View>
  );
}

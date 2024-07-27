import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Olga() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Olga</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Olga, a única gata sem um nome composto nessa família, chegou pouco
          depois de Kassandra e Geremmyas.
        </Text>
        <Text style={styles.text}>
          Com seu jeitinho carinhoso, ela conquistou a confiança de todos.
          Agora, tudo o que ela pede para que os outros façam, eles o fazem sem
          pestanejar.
        </Text>
        <Text style={styles.text}>
          É impressionante o quanto as palavras certas são poderosas.
        </Text>
        <Text style={styles.text}>
          Desde o seu primeiro dia, ela falava para Kléber Maurício:{" "}
          <Text style={styles.strong}>"KSHHHH"</Text>,{" "}
          <Text style={styles.strong}>"KSHHHH"</Text>.
        </Text>
        <Text style={styles.text}>
          Acredito que isso signifique algo como: "Olá, Kléber Maurício, eu sou
          muito fofinha e gostaria que você fizesse isso aqui pra mim".
        </Text>
      </View>
    </View>
  );
}

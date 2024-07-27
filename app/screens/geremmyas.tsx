import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Geremmyas() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Geremmyas Eduardo</Text>
      </View>
      <View>
        <Text style={styles.text}>Geremmyas tinha tudo para ser um snob.</Text>
        <Text style={styles.text}>
          Apesar de ser jogado fora dentro de uma sacolinha de super mercado,
          foi resgatado e viveu muito bem em um dos maiores apartamentos que eu
          já vi na minha vida, na Vila Olímpia.
        </Text>
        <Text style={styles.text}>
          Em alguns momentos, Geremmyas chegou a comentar que gostaria de ser
          <Text style={styles.strong}>gestor de valores imobiliários</Text> em
          uma grande corretora brasileira.
        </Text>
        <Text style={styles.text}>
          Com sorte, e graças aos apelos de Kléber, seu irmão mais velho, ele
          desistiu dessa ideia e continua vivendo como um belíssimo gatinho
          caseiro.
        </Text>
      </View>
    </View>
  );
}

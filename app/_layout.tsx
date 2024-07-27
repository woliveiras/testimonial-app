import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, paddingTop: 20 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Testimonial App",
          }}
        />
        <Drawer.Screen
          name="screens/kleber"
          options={{
            drawerLabel: "Kléber Maurício",
            title: "Testimonial App",
          }}
        />
        <Drawer.Screen
          name="screens/kassandra"
          options={{
            drawerLabel: "Kassandra Helenna",
            title: "Testimonial App",
          }}
        />
        <Drawer.Screen
          name="screens/geremmyas"
          options={{
            drawerLabel: "Geremmyas Eduardo",
            title: "Testimonial App",
          }}
        />
        <Drawer.Screen
          name="screens/olga"
          options={{
            drawerLabel: "Olga",
            title: "Testimonial App",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

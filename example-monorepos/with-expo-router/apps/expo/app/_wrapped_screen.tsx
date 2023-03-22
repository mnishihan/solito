import { Stack } from 'expo-router'
import { View } from 'moti/build'

export default function WrappedScreen({ children, screenProps }) {
  return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Stack.Screen options={{ ...screenProps }} />
    { children }
  </View>
}

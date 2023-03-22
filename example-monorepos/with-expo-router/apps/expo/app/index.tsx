import { HomeScreen } from 'app/features/home/screen'
import WrappedScreen from './_wrapped_screen'

export default function Home() {
  return <WrappedScreen
    screenProps={{
      title: "Home"
    }} >
      <HomeScreen />
    </WrappedScreen>
}

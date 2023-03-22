import { UserDetailScreen } from 'app/features/user/detail-screen'
import WrappedScreen from '../_wrapped_screen'

export default function UserDetail() {
  return <WrappedScreen
    screenProps={{
      title: "User"
    }} >
      <UserDetailScreen />
    </WrappedScreen>
}

import { createAppConteiner, createSwitchNavigator } from 'react-nanigation';

import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';

export default createAppConteiner(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
);

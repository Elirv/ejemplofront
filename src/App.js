//import { useAuth0 } from "@auth0/auth0-react";
import ExternalApi from "./externalApi";
import { Login } from './Login'
import { Logout } from './Logout'
import { Profile } from "./Profile";

function App() {

  //const { isAuthenticated } = useAuth0();

  return (
    <>


      <Profile />
      <Logout />
      <Login />
      <ExternalApi />

    </>
  );
}

export default App;
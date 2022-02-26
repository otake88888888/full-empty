import React from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { CognitoUserAmplify } from "@aws-amplify/ui";

import Header from "./Header";
import Footer from "./Footer";
import Drawer from "./Drawer";

import Amplify, { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import config from "./amp-config.json";

Amplify.configure({
  Auth: {
    identityPoolId: config.identityPoolId,
    region: config.region,
    userPoolId: config.userPoolId,
    userPoolWebClientId: config.userPoolWebClientId,
  },
});

Auth.configure();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function App({ signOut, user }: { signOut: any; user: CognitoUserAmplify }) {
  return (
    <div className="App">
      <Header></Header>
      <Drawer signOut={signOut} user={ user }/>
      <Footer></Footer>
    </div>
  );
}
export default withAuthenticator(App, { hideSignUp: true });
// export default App;

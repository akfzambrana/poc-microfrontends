import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Button from './Button';
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: "LightSalmon",
      padding: '1em',
      marginTop: '1em',
      marginBottom: '1em',
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div style={{ 
    backgroundColor: "LightSeaGreen", 
    padding: '1em',
    fontFamily: 'sans-serif'
  }}>
    <h1>Wrapper application</h1>
    <h2>Bellow we have the remote app:</h2>
    <RemoteWrapper>
      <RemoteApp />
    </RemoteWrapper>
    <h2>and a remote component:</h2>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>
    <div style={{
      marginTop: '1em', 
      marginBottom: '1em'
    }}>
      <Button />
    </div>
    <a href="http://localhost:4000">Go to Remote App</a>
  </div>
);
export default App;
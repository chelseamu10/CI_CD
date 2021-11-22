import logo from './logo.svg';
import Amplify, { Auth} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports'

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header style={{background:'green',textAlign:'center'}}>
        <h1 style={{fontWeight:'bold'}}>hello</h1>
        <h1 style={{fontWeight:'bold'}}>Dòng này thêm ở brand master</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);

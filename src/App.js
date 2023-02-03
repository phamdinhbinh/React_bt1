import logo from './logo.svg';
import './App.css';

function App() {
  let isUserLoggedIn = false ;
  let status;
    if (isUserLoggedIn==true) {
        status = 'Hello User';
    
    } else {
        status = 'Login Now';
    }
    return (
        <p>
            { status }
        </p>
    )
}

export default App;

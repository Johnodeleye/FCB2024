import reactLogo from './logo.svg'
import './App.css';
import './custom.css';

function Header (){


    return(
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <p className='redBg'>
            Edit <code>src/App.js</code> and save to reload.
            <h1>WELCOME BACK, KEEP RUNNING</h1>
          </p>
    
        </header>

    )
}


export default Header; //The semi-colon is optional//

import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  // useEffect(() => {
  //   tg.ready();
  // }, [])

  console.log(window.Telegram.WebApp)




  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

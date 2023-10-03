
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';
import Button from './components/Button/Button';




function App() {
  const {tg, onToggleButton} = useTelegram();
  
  useEffect(() => {
    tg.ready();
  }, [])

  console.log(window.Telegram.WebApp)




  return (
    <div className="App">
      {/* <Header /> */}
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;

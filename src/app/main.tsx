import Clicker from './components/clicker.tsx';
import Sidebar from './components/sidebar.tsx';
import { signal } from '@preact/signals';

const coins = signal(0);

function App() {


  
  function click() {
    console.log(coins.value);
    coins.value+= 1;
  };


  return (

    <div id="layout">
      <Sidebar id={"left"}>


      </Sidebar>
      <main id="main" class="container">
      
       <p id="coins">Coins: {coins.value}</p>
       <Clicker click={click} />
      </main>
      <Sidebar id={"right"}>
        <h3>Right Menu</h3>
      </Sidebar>
    </div>
  
  )
}
 

export default App;



<aside id="buildings" class="sidebar">
  <h3 id="buildings-header">Buildings</h3>      
  <menu id="building-list" class="list btn-list">
    <li class="list-item building">
      <button id="buy-t1" class="btn-buy">
          Buy Worker
     </button>
      <div>
        <p class="owned">Owned: <span class="total" id="t1-total">0</span></p>
        <p class="level">Level: <span id="t1-level">l</span></p>
      </div>
    </li>
    <li class="list-item building">
      <button id="buy-t2" class="btn-buy">
           Buy Rental 
     </button>
      <div class="stats">
      <p class="owned">Owned: <span id="t2-total">0</span></p>
      <p class="level">Level: <span id="t2-level">1</span></p>
   </li>
    <li class="list-item building">
      <button id="buy-t3" class="btn-buy btn-building">
          Buy shop
     </button>
    <div class="stats">  
      <p class="owned">Owned: <span class="total" id="t3-total">0</span></p>
      <p class="level">Level: <span id="t3-level">1</span></p>
    </div> 
   </li>
    <li class="list-item building">
       <button id="buy-t4" class="btn-buy btn-building">
          Buy Farm
       </button> 
    <div id="t4-stats" class="stats">  
      <p class="owned">Owned: <span class="total" id="t4-total">0</span></p>
      <p class="level">Level: <span id="t4-level">1</span</p>
   </div>
    </li>
    <li class="list-item building">
      <button id="buy-t5" class="btn-buy btn-building">
          Buy Factory
     </button>
      <div id="t4-stats" class="stats">
        <p class="owned">Owned: <span class="total" id="t5-total">0</span></p>
        <p class="level">Level: <span class="t5-level">1</span></p>
     </div> 
   </li>
  </menu>
</aside>

<style>
#buildings { 
    display: flex; flex-direction: column; 
    justify-content: center; align-items: center;
    border: 1px solid black;
    width: 30%;
    height: 80%;
}
#buildings-header {
  text-align: center;        
}
#building-list {
    display: flex; 
    flex-direction: column;
    list-style-type: none;
    justify-content: start;
    align-content: start;    
    align-items: start;
    border: 1px solid red; 
    padding: 0;
}
.list-item {
    margin-left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1px; 
    border: 1px solid black;

}
.btn-buy {
    height: 50px;
    width: 125px;
}
.stats {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    justify-items: center;
}
.owned {
    margin: 0 5px 0 5px;
}
.level {
    margin: 0 5px 0 5px; 
}
.total {
}
</style>

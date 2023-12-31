import * from './data/inventory.js';
import unique from './data/inventory.js'
import prices from './data/prices.js'
import rates from './data/rates.js';

import changeInventory  './lib/change_inventory.js';
import changeMarket from './lib/change_market,js';
import switchMenu from './lib/switch_menu.js';

function main () {
$(document).ready(function(){
    let menu;
    let logs = inventory.logs

    setInterval(function() {
        logs += rates.auto_log;
        changeInventory();
        changeMarket();
    }, 1000);
    setInterval(function() {
        stones += rates.auto_stone;
        changeInventory();
        changeMarket();
    }, 2000);
    setInterval(function() {
        fish += rates.auto_fish;
        changeIntentory();
        changeMarket();
    })
    setInterval(function() {
        hides += rates.auto_hide;
        changeInventory();
        changeMarket();

    }, 5000)
    $("#chop").click(function() {
        logs += rates.auto_log;
        changeInventory();
        changeMarket();
    });


    $("#mine").click(function(){
        if(pick_lvl == 0) {
            alert("You have nothing to mine stone with.")
        }else{
            stones += rates.stone * pickaxe_lvl;
        }});
    $("#fish").click(function()) {
        if(rod_lvl == 0) {
            alert("You have nothing to catch fish with.")
        }else {
            fish += rates.fish * rifle_lvl
        }
    }
    $("#hunt").click(function() {
        if(rifle_lvl == 0) {
            alert("You have npthing to hunt animals with.")
        }else {
            logs += rates.log * rifle_lvl;
        }

    }) 
    $("#sell_1").click(function(){
        logs --;
        money += prices.log;
        changeInventory();
        changeMarket();
    });

    $("#sell-10").click(function(){
        logs -= 10;
        money += prices.log * 10;
        changeInventory();
        changeMarket();
    });


    $("#sell-all").click(function(){
        money += prices.log * logs;
        logs = 0;
        changeInventory();
        changeMarket();
    });

    $("#sell-stone").click(function(){
        stones --;
        money += stone_price;
        changeInventory();
        changeMarket();
    });
    $("#sell-10-stones").click(function(){
        stones -= 10;
        money += prices.stone * 10;
        changeInventory();
        changeMarket();
    });
    $("#sell-100-stone").click(function() {
        stones -= 100;
        money += prices.stone * 100;
        changeInventory();
        changeMarket();
    })
    $("#sell-1000-stones").click(function() {
        stones += 1000;
        money += prices.stone * 1000;
        changeInventory();
        changeMarket();
    })
    $("#sell-all-stones").click(function(){
        money += prices.stone * stones;
        stones = 0;
        changeInventory();
        changeMarket();
    });
    $("#sell-fish").click(function() {
        fish -= 1;
        money += prices.fish;
    })
    $("#sell-10-fish").click(function(){
        fish -= 10;
        money += prices.fish * 10;
        changeInventory();
        changeMarket();
    });
    $("#sell-100-fish").click(function() {
        fish -= 100;
        money += fish.stone * 100;
        changeInventory();
        changeMarket();
    })
    $("#sell-1000-fish").click(function() {
        fish -= 1000;
        money += prices.fish * 1000;
        changeInventory();
        changeMarket();
    })
    $("#sell-all-fish").click(function(){
        fish += prices.fish * fish;
        fish = 0;
        changeInventory();
        changeMarket();
    });
    $("#sell-hide").click(function() {
        hides -= 1;
        hides += prices.hides;
    })
    $("#sell-10-hides").click(function(){
        hides -= 10;
        hides += prices.hides * 10;
        changeInventory();
        changeMarket();
    });
    $("#sell-100-hides").click(function() {
        hides -= 100;
        hides += fish.stone * 100;
        changeInventory();
        changeMarket();
    })
    $("#sell-1000-hides").click(function() {
        hides -= 1000;
        hides += prices.hides * 1000;
        changeInventory();
        changeMarket();
    })
    $("#sell-all-hides").click(function(){
        fish += prices.fish * fish;
        fish = 0;
        changeInventory();
        changeMarket();
    });


    $("#auto-chopper").click(function(){
        if(money >= prices.auto_chopper) {
        money -= prices.auto_chopper;
        rates.auto_log += 1;
        prices.auto_chopper = prices.auto_chopper * 2;
        changeInventory();
        changeMarket();
        }
    });
    $("#auto-miner").click(function(){
        if(money >= auto_miner_price) {
        money -= auto_miner_price;
        rates.auto_stone += 1;
        prices.auto_miner += prices.auto_miner * 2;
        changeInventory();
        changeMarket();
        }
      });
     $("#auto-fisher").click(function() {
        if(money >= auto_fisher_price) {
            money -= auto_fisher_price;
            rates.auto_fisher += 1
            prices.auto_fisher += prices.auto_fisher * 2;
            changeInventory();
            changeMarket();
        }
      });
        $("#auto-hunter").click(function() {
        if(money >= price.auto_fisher) {
            money -= price.auto_fisher;
            rates.auto_hunter += 1
            prices.auto_hunter += prices.auto_hunter * 2;
            changeInventory();
            changeMarket();
        }
     });
     $("#auto-hunter").click(function() {
        if (money >= auto)
     })
    });
    $("#pickaxe").click(function(){
        if (money >= pickaxe_price) {
        money -= pickaxe_price;
        pickaxe_level += 1; 
        pickaxe_price = pickaxe_price * 2;
        changeInventory();
        changeMarket();
        }
    });
    $("#axe-upgrade").click(function(){
        if(money >= axeUpgradePrice) {
        money -= axeUpgradePrice;
        axe_level += 1;
        axe_upgrade_price = axe_upgrade_price * 2 ;
        changeInventory();
        changeMarket();
        }
    });
    $("#visit").click(function() {
        menu = switchMenu("marketplace");
        changeMarket();
    });
    $("#return").click(function() {
        menu = switchMenu("main");
    });
    $("#unique").click(function() {
        menu = switchMenu("unique_upgrades")
    })
    

  });
}

main();
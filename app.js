import * from '../data/inventory.js'
import unique from './data/upgrades.js';
import rates from './data/rates.js';
import changeInventory  './lib/change_inventory.js';
import changeMarket from './lib/change_market,js';
import switchMenu from './lib/switch_menu.js';
function main () {
$(document).ready(function(){
  
    // Click Upgrade Prices
    const axe_upgrade_price = 10;
    const pickaxe_price = 50;  
    const musket_upgrade_price = 5000
    // Auto upgrade Prices
    const auto_chopper_price = 100; 
    const auto_miner_price = 3000;
    const auto_hunter_price = 10000;
    // Base Sell Prices
    const log_price = 1;
    const stone_price = 10;
    const hide_price = 50
    let menu;



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
            stones += stonePlus * pickaxes;
        }});
    $("#hunt").click(function() {
        if(rifle_lvl)
    }) 
    $("#sell1").click(function(){
        logs --;
        money += logPrice;
        changeInventory();
        changeMarket();
    });

    $("#sell-10").click(function(){
        logs -= 10;
        money += logPrice *10;
        changeInventory();
        changeMarket();
    });


    $("#sell-all").click(function(){
        money += logPrice * logs;
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
    $("#sell-10-stone").click(function(){
        stones -= 10;
        money += stone_price *10;
        changeInventory();
        changeMarket();
    });
    $("#sell-all-Stone").click(function(){
        money += stone_price * stones;
        stones = 0;
        changeInventory();
        changeMarket();
    });

    $("#auto-chopper").click(function(){
        if(money >= autoChopperPrice) {
        money -= autoChopperPrice;
        autoLogPlus += 1;
        autoChopperPrice = autoChopperPrice * 2;
        changeInventory();
        changeMarket();
        }
    });
    $("#auto-miner").click(function(){
        if(money >= autoMinerPrice) {
        money -= autoMinerPrice;
        autoStonePlus += 1;
        autoMinerPrice = autoMinerPrice * 2;
        changeInventory();
        changeMarket();
        }
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

    

  });
}

main();
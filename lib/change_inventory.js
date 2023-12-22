import * from '../data/inventory.js';
export default function changeInventory(){
        $("#money").html(`Money: $ ${money}	`);

        if(logs > 1) {
            $("#logs").html(`You own ${logs} logs.`);
        }else{
            $("#logs").html("");
        }

        if(stones > 0){
            $("#stone").html(`You own ${stones} piece(s) of stone.`);
        }else{
            $("#stone").html("");
        }
        if(hides > 0) {
        	$("$hide").html(`You own ${hides} hides`)
        } else {
        	$("hides").html("")
        }
 		// Tool Levels

        if(pickaxe > 0){
            $("#pick-lvl").html(`Pickaxe level: ${pickaxe}`);
        }else{
            $("#pick-lvl").html("");
        }
        if(rifle > 0) {
        	$("rifle-lvl").html(`Rifle Level: ${rifle}`)
        }else {
        	$("#rifle-lvl").html("");
        }

    }
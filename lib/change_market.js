export default function changeMarket(){
        if(logs >= 1) {
            $("#sell-log").css("display", "block")
        }else{
            $("#sell-log").css("display", "none")
        }
        if(logs >= 10) {
            $("#sell-10-logs").css("display", "block")
        }else{
            $("#sell-10-logs").css("display", "none")
        }
        if (logs >= 100 && unique.horse === true) {
            $('#sell-100-logs').css("display", "block")
        }else {
            $('#sell-100-logs').css("display", "none")
        }
        if (logs >= 1000 && log_wagon === true) {
            $('#sell-1000-logs').css("display", "block")
        }else {
            $('#sell-1000-logs').css("display", "none")
        }
        if (logs > 0 && unique.log_train === true) {
            $("#sell-all-logs").css("display", "block")
        }else{
            $("#sell-all-logs").css("display", "none")
        }
     
        if(stones >= 1) {
            $("#sell-stone").css("display", "block")
        }else{
            $("#sell-stone").css("display", "none")
        }
        if(stones >= 10) {
            $("#sell-10-stones").css("display", "block")
        }else{
            $("#sell-10-stones").css("display", "none")
        }   
        if (stones >= 100 && unqiue.horse === 'true') {
            $("sell-100-stones").css("display", "block") 
        }else{
            $("sell-100-stones").css("display", "none")
        
        if (logs >= 1000 && unique.stone_wagon === true) {
            $('#sell-1000-stones').css("display", "block")
        }else {
            $('#sell-1000-stones').css("display", "none")
        }
        if(stones > 0 && unique.stone_train === true) {
            $("#sell-all-stones").css("display", "block")
        }else{
        $("#sell-all-stones").css("display", "none")
        }
    
    }    
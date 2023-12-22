export default function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu; 
    }
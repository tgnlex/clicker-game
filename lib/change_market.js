import {logs, stones, fish, hides}from '../data/inventory.js';
import unique from '../data/upgrades.js';
export default function changeMarket(){
       // Sell Log Buttons
        if(logs >= 1) {
            $("#sell-log").css("display", "block")
        }else{
            $("#sell-log").css("display", "none")
        }
        if (logs >= 10 && unique.horse === true) {
            $('#sell-10-logs').css("display", "block")
        }else {
            $('#sell-10-logs').css("display", "none")
        }
        if (logs >= 100 && unqiue.wagon === true) {
            $('#sell-100-logs').css("display", "block")
        }else {
            $('#sell-100-logs').css("display", "none")
        }
        if (logs >= 1000 && unique.boat === true) {
            $('#sell-1000-logs').css('display', 'block')
        } else {
            $('#sell-1000-logs').css('display': 'none')
        }
        if (logs > 0 && unique.train === 'true') {
            $("#sell-all-logs").css("display", "block")
        }else{
            $("#sell-all-logs").css("display", "none")
        }

        // Sell stone Buttons
       
        if(stones >= 1) {
            $("#sell-stone").css("display", "block")
        }else{
            $("#sell-stone").css("display", "none")
        }
        if (stones >= 10 && unqiue.horse === 'true') {
            $("sell-10-stones").css("display", "block") 
        }else{
            $("sell-10-stones").css("display", "none")
        
        if (stones >= 100 && unique.wagon === 'true') {
            $('#sell-100-stones').css("display", "block")
        }else {
            $('#sell-100-stones').css("display", "none")
        }
        if (fish >= 1000 && unique.boat === 'true') {
            $('#sell-1000-stones').css('display', 'block')
        } else {
            $('#sell-1000-stones').css('display': 'none')
        }
        if(stones > 0 && unique.train === 'true') {
            $("#sell-all-stones").css("display", "block")
        }else{
        $("#sell-all-stones").css("display", "none")
        }
        // Sell fish Buttons
        if(fish >= 1) {
            $("#sell-fish").css("display", "block")
        }else{
            $("#sell-fish").css("display", "none")
        }
        if (fish >= 10 && unqiue.horse === 'true') {
            $("sell-10-fish").css("display", "block") 
        }else{
            $("sell-10-fish").css("display", "none")
        
        if (fish >= 100 && unique.wagon === 'true') {
            $('#sell-100-fish').css("display", "block")
        }else {
            $('#sell-100-fishs').css("display", "none")
        }
        if (fish >= 1000 && unique.boat === 'true') {
            $('#sell-1000-fish').css('display', 'block')
        } else {
            $('#sell-1000-fish').css('display': 'none')
        }
        if(fish > 0 && unique.train === 'true') {
            $("#sell-all-fish").css("display", "block")
        }else{
            $("#sell-all-fish").css("display", "none")
        }
        // Sell Hide Buttons
        if(hides >= 1) {
            $("#sell-hide").css("display", "block")
        }else{
            $("#sell-hide").css("display", "none")
        }
        if (hides >= 10 && unqiue.horse === 'true') {
            $("sell-10-hides").css("display", "block") 
        }else{
            $("sell-10-hides").css("display", "none")
        
        if (hides >= 100 && unique.wagon === 'true') {
            $('#sell-100-hides').css("display", "block")
        }else {
            $('#sell-100-hides').css("display", "none")
        }
        if (hides >= 1000 && unique.boat === 'true') {
            $('#sell-1000-hides').css('display', 'block')
        } else {
            $('#sell-1000-hides').css('display': 'none')
        }
        if(hides > 0 && unique.train === true) {
            $("#sell-all-hides").css("display", "block")
        }else{
            $("#sell-all-hides").css("display", "none")
        }
    
    }    
import {gold, total_earned, total_clicks, clickLevel, basePower} from './vars.js';
function clickListener() {
  let clickPower = clickLevel * basePower
  gold = gold + clickPower;
  total_earned = total_earned  + clickPower;
  total_clicks = total_clicks + 1;
}

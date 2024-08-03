<!DOCTYPE html>
<html lang="en">
  <?php include('partials/head.php') ?> 
  <body>
    <main id="game" class="screen">
      <div id="name-wrapper"></div> 
   <?php include('partials/target.php')   ?>                 
   <p class="gold-label">Current Gold: <span class="gold">0</span> </p>
    <div id="level"></div>
      <?php include('partials/building.php') ?>
    </main>
	<script type="module" src="src/main.js"></script>
  </body>
</html>
<style>
 #click-target {
   background: #ffece3;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%)
 }
 .list-item {list-style-type: none;}
</style>


//START TO FUNCTIONS

//Home Screen functions
onEvent("homeButton1", "click", function( ) {
setScreen("STARTSCREEN");
playSound("sound://category_app/snap.mp3");
});
onEvent("homeButton2", "click", function( ) {
setScreen("STARTSCREEN");
playSound("sound://category_app/snap.mp3");
});
onEvent("homeButton3", "click", function( ) {
setScreen("STARTSCREEN");
playSound("sound://category_app/snap.mp3");
});
onEvent("button13", "click", function( ) {
setScreen("des_screen");
playSound("sound://category_app/snap.mp3");
});
//End of Home screen functions

//Back button on des screen
onEvent("image1", "click", function( ) {
setScreen("STARTSCREEN");
playSound("sound://category_app/snap.mp3");
});
//End Back button on des screen

//set screen on initial buttons
onEvent("instrumentsButton", "click", function( ) {
setScreen("instruments");
playSound("sound://category_app/snap.mp3");
});
onEvent("extraSounds", "click", function( ) {
setScreen("extra_sounds");
playSound("sound://category_app/snap.mp3");
});
//End of screen on initial buttons

//INSTRUMENT SOUNDS
onEvent("button1", "click", function( ) {
playSound("sound://category_instrumental/sax_downscale_2.mp3");
});
onEvent("button2", "click", function( ) {
playSound("sound://category_instrumental/digital_music_2.mp3");
});
onEvent("button3", "click", function( ) {
playSound("sound://category_instrumental/harpe_music_1.mp3");

});
onEvent("button4", "click", function( ) {
playSound("sound://category_instrumental/marimba_upscale_1.mp3");
console.log("marimba noise");
});
onEvent("button5", "click", function( ) {
playSound("sound://category_instrumental/trumpet.mp3");
console.log("trumpet noise");
});
onEvent("button6", "click", function( ) {
playSound("sound://category_instrumental/chime.mp3");
console.log("chime noise");
});
//END INSTRUMENT SOUNDS

//EXTRA SOUNDS
onEvent("button7", "click", function( ) {
playSound("sound://category_music/birthday_kazoo_negative_game_cue_1.mp3");
console.log("kazoo noise");
});
onEvent("button8", "click", function( ) {
playSound("sound://category_animals/cat.mp3");
console.log("cat noise");
});
onEvent("button9", "click", function( ) {
playSound("sound://category_explosion/8bit_explosion.mp3");
console.log("explosion noise");
});
onEvent("button10", "click", function( ) {
playSound("sound://category_bell/vibrant_cash_register_open_positive_game_open.mp3");
console.log("cash noise");
});
onEvent("button11", "click", function( ) {
playSound("sound://category_board_games/dice_shuffle.mp3");
console.log("dice roll");
});
onEvent("button12", "click", function( ) {
playSound("sound://category_bell/bells_win_high.mp3");
console.log("bell noise");
});
//END EXTRA SOUNDS

//END OF FUNCTIONS

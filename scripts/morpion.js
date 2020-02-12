// (function($) {
//     $.fn.morpion = function() {
// $item1 = document.body.children[1].children[0].children[0]
// $item2 = document.body.children[1].children[0].children[1]
// $item3 = document.body.children[1].children[0].children[2]
// $item4 = document.body.children[1].children[1].children[0];
// $item5 = document.body.children[1].children[1].children[1];
// $item6 = document.body.children[1].children[1].children[2];
// $item7 = document.body.children[1].children[2].children[0];
// $item8 = document.body.children[1].children[2].children[1];
// $item9 = document.body.children[1].children[2].children[2];

//         if(document.body.children[1].children[0].children[0].innerHTML == ''){
//             evenementclic = document.body.children[1].children[0].children[0];
//             evenementclic.onclick = function morpionClick(){
//             document.body.children[1].children[0].children[0].innerHTML = 'X';
//             }
//             morpionClick();
//         }
//     };
// })(jQuery);
// $('#grid').morpion();


// player = 0;
// (function($) {
//     $.fn.morpion = function() { 
//     $(this).find(".cell").click(function() {

//         if(player == 0){
//             $(this).html('X');
//         }

//          if(player == 1){
//             $(this).html('O');
//             player = !player >>> 0;
//                 })
//             };
//       })(jQuery);     
//    $('#grid').morpion();  


// let player = 0;
// (function($) {
//     $.fn.morpion = function() { 
//         $(this).find(".cell").click(function() {

//             let victoire
//             let victoire1
//             item1 = document.body.children[1].children[0].children[0]
//             item2 = document.body.children[1].children[0].children[1]
//             item3 = document.body.children[1].children[0].children[2]
//             item4 = document.body.children[1].children[1].children[0];
//             item5 = document.body.children[1].children[1].children[1];
//             item6 = document.body.children[1].children[1].children[2];
//             item7 = document.body.children[1].children[2].children[0];
//             item8 = document.body.children[1].children[2].children[1];
//             item9 = document.body.children[1].children[2].children[2];

//             if( (item1.innerHTML == "X" && item2.innerHTML == "X" && item3.innerHTML) == "X" ||
//             (item4.innerHTML == "X" && item5.innerHTML == "X" && item6.innerHTML == "X") ||
//             (item7.innerHTML == "X" && item8.innerHTML == "X" && item9.innerHTML == "X") ||
//             (item1.innerHTML == "X" && item4.innerHTML == "X" && item7.innerHTML == "X") ||
//             (item2.innerHTML == "X" && item5.innerHTML == "X" && item8.innerHTML == "X") ||
//             (item3.innerHTML == "X" && item6.innerHTML == "X" && item9.innerHTML == "X") ||
//             (item1.innerHTML == "X" && item5.innerHTML == "X" && item9.innerHTML == "X") ||
//             (item3.innerHTML == "X" && item5.innerHTML == "X" && item7.innerHTML == "X")) {
//                 victoire = true;
//                 console.log("coucou")
//             }
//             if( (item1.innerHTML == "O" && item2.innerHTML == "O" && item3.innerHTML == "O") ||
//             (item4.innerHTML == "O" && item5.innerHTML == "O" && item6.innerHTML == "O") ||
//             (item7.innerHTML == "O" && item8.innerHTML == "O" && item9.innerHTML == "O") ||
//             (item1.innerHTML == "O" && item4.innerHTML == "O" && item7.innerHTML == "O") ||
//             (item2.innerHTML == "O" && item5.innerHTML == "O" && item8.innerHTML == "O") ||
//             (item3.innerHTML == "O" && item6.innerHTML == "O" && item9.innerHTML == "O") ||
//             (item1.innerHTML == "O" && item5.innerHTML == "O" && item9.innerHTML == "O") ||
//             (item3.innerHTML == "O" && item5.innerHTML == "O" && item7.innerHTML == "O")){
//                 victoire1 = true;
//             }
//             if (victoire == true){
//                 document.getElementById("playerOne").innerHTML = "1"
//             }
//             if (victoire1 == true){

//             }

//             if($(this).html() == ""){

//                 if(player == 0 ){
//                     $(this).html('X');
//                             }
//                 if(player == 1){
//                     $(this).html('O');
//                                 }
//                     player = !player >>> 0
//             }
//             })
//             };
//    })(jQuery); 
// $('#grid').morpion();


$item1 = document.body.children[1].children[0].children[0];
$item2 = document.body.children[1].children[0].children[1];
$item3 = document.body.children[1].children[0].children[2];
$item4 = document.body.children[1].children[1].children[0];
$item5 = document.body.children[1].children[1].children[1];
$item6 = document.body.children[1].children[1].children[2];
$item7 = document.body.children[1].children[2].children[0];
$item8 = document.body.children[1].children[2].children[1];
$item9 = document.body.children[1].children[2].children[2];


var player = 0;
var $victoire1;
var $victoire2;
var victor1 = 0;
var victor2 = 0;

(function ($) {
    $.fn.morpion = function () {
        $(this).find(".cell").click(function () {
            if ($(this).html() == "") {
                if (player == 0) {
                    $(this).html('X');
                }
                if (player == 1) {
                    $(this).html('O');
                }
                player = !player >>> 0
                if ($item1.innerHTML == 'X' &&
                    $item2.innerHTML == 'X' &&
                    $item3.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item1.innerHTML == 'O' &&
                    $item2.innerHTML == 'O' &&
                    $item3.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($item4.innerHTML == 'X' &&
                    $item5.innerHTML == 'X' &&
                    $item6.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item4.innerHTML == 'O' &&
                    $item5.innerHTML == 'O' &&
                    $item6.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($item7.innerHTML == 'X' &&
                    $item8.innerHTML == 'X' &&
                    $item9.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item7.innerHTML == 'O' &&
                    $item8.innerHTML == 'O' &&
                    $item9.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($item1.innerHTML == 'X' &&
                    $item4.innerHTML == 'X' &&
                    $item7.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item1.innerHTML == 'O' &&
                    $item4.innerHTML == 'O' &&
                    $item7.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($item2.innerHTML == 'X' &&
                    $item5.innerHTML == 'X' &&
                    $item8.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item2.innerHTML == 'O' &&
                    $item5.innerHTML == 'O' &&
                    $item8.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($item3.innerHTML == 'X' &&
                    $item6.innerHTML == 'X' &&
                    $item9.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item3.innerHTML == 'O' &&
                    $item6.innerHTML == 'O' &&
                    $item9.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($item1.innerHTML == 'X' &&
                    $item5.innerHTML == 'X' &&
                    $item9.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item1.innerHTML == 'O' &&
                    $item5.innerHTML == 'O' &&
                    $item9.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($item3.innerHTML == 'X' &&
                    $item5.innerHTML == 'X' &&
                    $item7.innerHTML == 'X') {
                    $victoire1 = true;
                    victor1++;
                }

                if ($item3.innerHTML == 'O' &&
                    $item5.innerHTML == 'O' &&
                    $item7.innerHTML == 'O') {
                    $victoire2 = true;
                    victor2++;
                }

                if ($victoire1 === true) {
                    document.getElementById("playerOne").innerHTML = victor1;
                    alert("Joueur 1 remporte la partie");
                    $item1.innerHTML = "";
                    $item2.innerHTML = "";
                    $item3.innerHTML = "";
                    $item4.innerHTML = "";
                    $item5.innerHTML = "";
                    $item6.innerHTML = "";
                    $item7.innerHTML = "";
                    $item8.innerHTML = "";
                    $item9.innerHTML = "";
                    $victoire1 = false;
                    player = 0;
                }

                if ($victoire2 === true) {
                    document.getElementById("playerTwo").innerHTML = victor2;
                    alert("Joueur 2 Remporte la partie");
                    $item1.innerHTML = "";
                    $item2.innerHTML = "";
                    $item3.innerHTML = "";
                    $item4.innerHTML = "";
                    $item5.innerHTML = "";
                    $item6.innerHTML = "";
                    $item7.innerHTML = "";
                    $item8.innerHTML = "";
                    $item9.innerHTML = "";
                    $victoire2 = false;
                    player = 0;
                }
                document.getElementById("replay").onclick = function rejouer() {
                    location.reload();
                }
            }
        })
    };
})(jQuery);
$('#grid').morpion();
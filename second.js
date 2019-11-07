'use strict';
/*
 * second.mjs
 */
import {$, Quiz} from './modules/shape.js';

let things = [];
var score = 0;

//spørgsmål 1
let quiz = Object.create(Quiz);
quiz.init('Hvad er en funktion?', 'svar1', 0, 'svar2', 1, 'svar3', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz);

//spørgsmål 2
let quiz1 = Object.create(Quiz);
quiz1.init('Hvad er et objekt?', 'svar10', 0, 'svar20', 0, 'svar30', 1);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz1);
 

//Vis spørgsmål
//$('quiz').innerHTML = quiz.vis();
//$('quiz').innerHTML = quiz1.vis();
function show(){
    for (var i = 0; i < things.length; i++) {
        $('quiz').innerHTML = things[0].vis();
        console.log(things);
        start();
    }
}
show();

//Går videre til næste spg,når der bliver valgt et spg.
function hide2() { 
    console.log('test');
    for(var i = 0; i < things.length; i++){
        things.shift(); 
        show();
    }   
}


//Tjek spørgsmål + sæt score
$('yourScore').innerHTML = 'Korrekte svar: ' + score + ' ud af 5';

function start(){
$('formid').addEventListener('change', function(){
    for(var i = 0; i < things.length; i++){
        if(things[i].check() == false){
            alert('Har du svaret?');
        } if(things[i].correct() == true ){
            score++;
            $('yourScore').innerHTML = 'Korrekte svar: ' + score + ' ud af 5' ;
        }
        hide2();
    }
    
});

}
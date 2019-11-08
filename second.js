'use strict';
/*
 * second.mjs
 */
import {$, Quiz} from './modules/shape.js';

let things = [];
var score = 0;

//spørgsmål 1
let quiz = Object.create(Quiz);
quiz.init('svar2', 'svar1', 0, 'svar2', 1, 'svar3', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz);

//spørgsmål 2
let quiz1 = Object.create(Quiz);
quiz1.init('svar30', 'svar10', 0, 'svar20', 0, 'svar30', 1);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz1);

//spørgsmål 3
let quiz2 = Object.create(Quiz);
quiz2.init('svar200', 'svar100', 0, 'svar200', 1, 'svar300', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz2);

//spørgsmål 4
let quiz3 = Object.create(Quiz);
quiz3.init('svar1000', 'svar1000', 1, 'svar2000', 0, 'svar3000', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz3);

//spørgsmål 5
let quiz4 = Object.create(Quiz);
quiz4.init('svar30000', 'svar10000', 0, 'svar20000', 0, 'svar30000', 1);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz4);
 
//Tjek spørgsmål + sæt score
$('yourScore').innerHTML = 'Correct: ' + score + ' out of 8';

function start(){
    $('formid').addEventListener('change', function(){
        if(quiz.check() == false){
            alert('Har du svaret?');
        } 
        for(var i = 0; i < things.length; i++){
            if(things[i].correct() == true ){
                score++;
                $('yourScore').innerHTML = 'Correct: ' + score + ' out of 8';
            }
            //Går videre til næste spg,når der bliver valgt et spg.
            if($('a').checked == true || $('b').checked == true || $('c').checked == true){
                things.shift(); 
                show();
            }
        }
    });
};

//Går videre til næste spg,når der bliver valgt et spg.
function hide2() { 
    console.log('test');
    for(var i = 0; i < things.length; i++){
        things.shift(); 
        show();
    }   
};

//Vis spørgsmål
//$('quiz').innerHTML = quiz.vis();
//$('quiz').innerHTML = quiz1.vis();
function show(){
    console.log(things);
    for (var i = 0; i < things.length; i++) {
        $('quiz').innerHTML = things[0].vis();
        start();
    }
};
show();
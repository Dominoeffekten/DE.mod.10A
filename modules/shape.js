'use strict';

const $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

/**
 * Shape object, parent
 */

const Quiz = { //Lav spørgsmål
    init(navn, sporg1, value1, sporg2, value2, sporg3, value3) {
        this.navn = navn;
        this.sporg1 = sporg1;
        this.value1 = value1;
        this.sporg2 = sporg2;
        this.value2 = value2;
        this.sporg3 = sporg3;
        this.value3 = value3;
    },
    vis: function(){ //Vis spørgsmål
        return `<h3>${this.navn}</h3> <p> <form id="formid"> <input name="text" type="radio" value="${this.value1}" id="a">${this.sporg1} <br> <input name="text" type="radio" value="${this.value2}" id="b">${this.sporg2} <br> <input name="text" type="radio" value="${this.value3}" id="c">${this.sporg3} </form> </p>`;
    },
    
    check: function(){ //Tjek om der er trykket på alle
        if ($('a').checked == false && $('b').checked == false && $('c').checked == false){
            return false;
        }
    },
    correct: function(){ //Tjek om svaret er rigtigt, hvis den er lægges 1 point til
     
        if ($('a').checked == true && $('a').value == 1){
            console.log('Korrekt svar 1');
            return true;
        }else if ($('b').checked == true && $('b').value == 1){
            console.log('Korrekt svar 2');
            return true;
        }else if ($('c').checked == true && $('c').value == 1){
            console.log('Korrekt svar 3');
            return true;
        }else{
            console.log('forkert');
            return false;
        }
    }
};



export {$, Quiz};
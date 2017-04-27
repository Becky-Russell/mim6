function init() {
    "use strict";
    var exol;
    
    exo1 = function exo1(e) {
    console.log(e);
    var i = 0, tab = [11, null, true, NaN, {msg: "hello"}];
    console.log(tab);
    while (i < tab.length) {
        console.log(tab[i]);
        i += 1; 
    
    }
};
    console.log("element ready !!!")
    document.getElementById('exo1').onclick = exo1; 


}

/*

    1. f(x) is defined at c
    2. the limit exists at f(c)
    3. f(c) = lim_[x->c]f(c)
    
*/

const replacements = [
    ["^", "**"], 
    ["sin(", "Math.sin("], 
    ["cos(", "Math.cos("],
    ["tan(", "Math.tan("],
    ["arcsin(", "Math.asin("],
    ["arccos(", "Math.acos("], 
    ["arctan(", "Math.atan("]
]

// JavaScript Math does not support trigonometric functions such as
// csc(x), cot(x), arcsec(x), etc.

const f = (func, x) => {

    for (l in replacements) {
        func = func.replace(replacements[l][0], replacements[l][1]);
    }

    func = func.replace(/x/g, `(${String(x)})`);
    return eval(func);

}

const lim = (func, c, side=false) => {

    const s1 = f(func, c);

    limR = Math.round(f(func, c + (1 / 10 ** 10)) * 100) / 100;
    limL = Math.round(f(func, c - (1 / 10 ** 10)) * 100) / 100;

    if (limR < -1000000){
        limR = "-inf";
    } else if (limR > 1000000){
        limR = "inf";
    };

    if (limL < -1000000){
        limL = "-inf";
    } else if (limL > 1000000){
        limL = "inf";
    };

    if (side)
        return `${msg}<h1>${(side == 'right') ? limR : limL}</h1>`;

    else if (limR == limL)
        return `${msg}<h1>${(s1 == limR) ? s1 : 'DNE'}</h1`;

    else return `${msg}<h1>DNE</h1`
   
}

$("#calc").click(() => {
    
    const c = parseFloat($("#limit-x").val());
    const func = $("#limit-f").val();
    const right = ($("input[type=radio]#right").is(":checked")) ? 'right' : false;
    const left = ($("input[type=radio]#left").is(":checked")) ? 'left' : false;

    msg = `Calculating <b>lim_[x -> ${c}] ${func}</b>... `;
    $("#result").html(msg);
    
    if (right || left)
        $("#result").html(lim(func, c, (right) ? 'right' : 'left'));
    
    else $("#result").html(lim(func, c));

});


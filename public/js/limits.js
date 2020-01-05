
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
    ["csc(", "1/sin("], 
    ["sec(", "1/cos("], 
    ["cot(", "1/tan("],
    ["arcsin(", "Math.asin("],
    ["arccos(", "Math.acos("], 
    ["arctan(", "Math.atan("], 
    ["pi", "3.1415926535"]
]

// JavaScript Math does not support trigonometric functions such as
// csc(x), cot(x), arcsec(x), etc.

const f = (func, x) => {

    for (l in replacements)
        func = func.replace(replacements[l][0], replacements[l][1]);

    func = func.replace(/x/g, `(${String(x)})`);
    return eval(func);

}

const checkInfinity = (val, num=(10 ** 6)) => {

    if (val < -num || val > num)
        return (val < -num) ? "-Infinity" : "Infinity";
    
    else return val

}

const lim = (func, c, side=false) => {

    const s1 = Math.round(f(func, c) * 100) / 100;

    limR = checkInfinity(Math.round(f(func, c + (1 / 10 ** 5)) * 100) / 100);
    limL = checkInfinity(Math.round(f(func, c - (1 / 10 ** 5)) * 100) / 100);

    if (side)
        return `${msg}<h1>${(side == 'right') ? limR : limL}</h1>`;

    else if (limR == limL)
        return `${msg}<h1>${(s1 == limR) ? s1 : 'DNE'}</h1>`;

    else return `${msg}<h1>DNE</h1>`
   
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

    $("#result").addClass("fade-in");

});


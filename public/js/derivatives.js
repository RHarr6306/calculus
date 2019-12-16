// derivative calculator

/*

__input__
x = ?
f(x) = ?

__output__
slope & f'(x)

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

    const s1 = f(func, c);

    alert(s1)

    limR = checkInfinity(Math.round(f(func, c + (1 / 10 ** 10)) * 100) / 100);
    limL = checkInfinity(Math.round(f(func, c - (1 / 10 ** 10)) * 100) / 100);

    if (side)
        return `${msg}<h1>${(side == 'right') ? limR : limL}</h1>`;

    else if (limR == limL)
        return `${msg}<h1>${(s1 == limR) ? s1 : 'DNE'}</h1`;

    else return `${msg}<h1>DNE</h1`
   
}

const diffQuotient = (func, x, dx) => {

    const s1 = f(func, x)

    // [f(dx + x) - f(x)]/dx
    const r = Math.round((f(func, x + dx) - f(func, x)) / dx);
    const l = Math.round((f(func, x - dx) - f(func, x)) / -dx);

    if (r == l)
        return `<h1>${(s1 == r) ? l : 'DNE'}</h1>`;

    else return `<h1>DNE</h1>`

}

$("#calc").click(() => {
    
    const x = $("#diff-x").val();
    const func = $("#diff-f").val();
    const msg = "Calculating <b>lim_[dx->x]((f(x+dx)-f(x))/dx)</b>... ";

    $("#result").html(`${msg} ${diffQuotient(func, parseInt(x), (1 / 10 ** 10))}`)

});


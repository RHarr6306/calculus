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

const f = (func, x) => {

    for (l in replacements) {
        func = func.replace(replacements[l][0], replacements[l][1]);
    }

    func = func.replace(/x/g, `(${String(x)})`);
    return eval(func);

}

const checkInfinity = (val, num=(10 ** 6)) => {
    
    if (val < -num)
        return "-Infinity";

    else if (val > num)
        return "Infinity";

    else return val

}

const lim = (func, c, side=false) => {

    const s1 = f(func, c);

    limR = checkInfinity(Math.round(f(func, c + (1 / 10 ** 10)) * 100) / 100);
    limL = checkInfinity(Math.round(f(func, c - (1 / 10 ** 10)) * 100) / 100);

    if (side)
        return `${msg}<h1>${(side == 'right') ? limR : limL}</h1>`;

    else if (limR == limL)
        return `${msg}<h1>${(s1 == limR) ? s1 : 'DNE'}</h1`;

    else return `${msg}<h1>DNE</h1`
   
}

$("#calc").click(() => {
    
    // handle derivative

});


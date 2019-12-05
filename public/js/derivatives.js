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

    func = func.replace(/x/g, String(x));    
    return eval(func);

}

const lim = (func, c) => {


    const s1 = f(func, c);
    var s2 = "DNE";
    limR = Math.round(f(func, c + 0.0001));
    limL = Math.round(f(func, c - 0.0001));
    
    if (limR == limL)
        s2 = limR;
    
    if (s1 == s2)
        return `${msg}<h1>${s1}</h1>`;
    
    else return `${msg}<h1>DNE</h1>`;

}

$("#calc").click(() => {
    
    // handle derivative

});


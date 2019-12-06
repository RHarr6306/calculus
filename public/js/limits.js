
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

    func = func.replace(/x/g, String(x));    
    return eval(func);

}

const lim = (func, c) => {


    const s1 = f(func, c);
    var s2 = "DNE";
    limR = Math.round(f(func, c + 0.000001) * 100) / 100;
    limL = Math.round(f(func, c - 0.000001) * 100) / 100;
    
    if (limR == limL)
        s2 = limR;
    
    if (s1 == s2)
        return `${msg}<h1>${s1}</h1>`;
        
    else return `${msg}<h1>DNE</h1>`;
        
}

$("#calc").click(() => {
    
    const c = parseFloat($("#limit-x").val());
    const func = $("#limit-f").val();
    
    msg = `Calculating <b>lim_[x -> ${c}] ${func}</b>... `;
    $("#result").html(msg);
    
    $("#result").html(lim(func, c));

});


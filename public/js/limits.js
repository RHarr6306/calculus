// limit calculator

/*

    __Input__
    x => ?
    f(x) = ?

    __Output__
    limit value or DNE
    
    __Steps__
    1. f(x) is defined at c
    2. the limit exists at f(c)
    3. f(c) = lim_[x->c]f(c)
    
*/

const f = (func, x) => {


    func = func.replace(/\^/g, "**");
    func = func.replace(/\(/g, "*(");
    func = func.replace(/\/\*\(/g, "/\(");
    func = func.replace(/x/g, String(x));
    // cleanup? 
    // More replace functions may be needed.

    if (eval(func))
        return eval(func);
    
    else return "DNE";

}


const evaluate = (func, c) => {

    msg = "Calculating <b>lim_[x -> " + c + "] " + func + "</b>... ";
    $("#result").html(msg);
    
    const s1 = f(func, c);
    var s2 = "DNE";

    limR = Math.round(f(func, c + 0.01));
    limL = Math.round(f(func, c - 0.01));

    if (limR === limL)
        s2 = limR;

    if (s1 == s2)
        $("#result").html(msg + "<h1>" + s1 + "</h1>");

    else $("#result").html(msg + "DNE");

}

$("#calc").click(() => {

    const c = parseFloat($("#limit-x").val());
    const f = $("#limit-f").val();

    evaluate(f.replace(/\s+/g, ' '), c);

});


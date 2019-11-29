// limit calculator

/*

__input__
x => ?
f(x) = ?

__output__
limit value or DNE

*/

const calc = (func, x) => {

    $("#result").html("Calculating <b>lim_{x -> " + x + "} " + func + "</b>...");

    // calculate

}

$("#calc").click(() => {

    const x = $("#limit-x").val();
    const f = $("#limit-f").val();

    calc(f.replace(/\s+/g, ' '), x);

});


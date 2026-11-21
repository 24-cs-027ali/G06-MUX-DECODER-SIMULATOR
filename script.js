function mux4to1(D0, D1, D2, D3, S1, S0) {
    let select = S1 * 2 + S0;

    if (select === 0) {
        return D0;
    }
    else if (select === 1) {
        return D1;
    }
    else if (select === 2) {
        return D2;
    }
    else {
        return D3;
    }}
console.log(mux4to1(1, 0, 0, 0, 0, 0));
console.log(mux4to1(0, 1, 0, 0, 0, 1));
console.log(mux4to1(0, 0, 1, 0, 1, 0));
console.log(mux4to1(1, 1, 0, 1, 1, 0));
function decoder2to4(A, B) {
    let select = A * 2 + B;
    let outputs = [0, 0, 0, 0];
    outputs[select] = 1;
    return outputs;
}

console.log(mux4to1(1, 0, 1, 0, 0, 0));
console.log(decoder2to4(1, 0));
console.log(mux4to1(0, 1, 0, 1, 1, 0));


// Connect MUX button with the MUX function
document.getElementById("calculateMuxBtn").addEventListener("click", function () {

    const d0 = Number(document.getElementById("d0").value);
    const d1 = Number(document.getElementById("d1").value);
    const d2 = Number(document.getElementById("d2").value);
    const d3 = Number(document.getElementById("d3").value);

    const s0 = Number(document.getElementById("s0").value);
    const s1 = Number(document.getElementById("s1").value);

    const result = mux4to1(d0, d1, d2, d3, s1, s0);

    document.getElementById("muxOutput").textContent =
        "Output: " + result;
});

// Connect Decoder Button with Decoder Function
document.getElementById("runDecoderBtn").addEventListener("click", function () {

    const A = Number(document.getElementById("a").value);
    const B = Number(document.getElementById("b").value);

    const outputs = decoder2to4(A, B);

    document.getElementById("y0").textContent = "Y0: " + outputs[0];
    document.getElementById("y1").textContent = "Y1: " + outputs[1];
    document.getElementById("y2").textContent = "Y2: " + outputs[2];
    document.getElementById("y3").textContent = "Y3: " + outputs[3];

});
                                                            

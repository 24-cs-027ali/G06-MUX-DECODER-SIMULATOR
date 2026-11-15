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

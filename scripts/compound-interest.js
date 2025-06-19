function calculateCI() {
    const P = parseFloat(document.getElementById("principal").value);
    const R = parseFloat(document.getElementById("rate").value) / 100;
    const N = parseInt(document.getElementById("times").value);
    const T = parseFloat(document.getElementById("years").value);

    if (isNaN(P) || isNaN(R) || isNaN(N) || isNaN(T)) {
        alert("Please enter valid numeric values.");
        return;
    }

    const A = P * Math.pow((1 + R / N), N * T);
    const interest = A - P;

    const explanation = `
        <div class="step">Step 1: Use the formula <strong>A = P(1 + r/n)<sup>nt</sup></strong></div>
        <div class="step">Step 2: Substitute values: A = ${P} × (1 + ${R.toFixed(4)} / ${N})<sup>${N} × ${T}</sup></div>
        <div class="step">Step 3: Simplify: A = ${P} × (1 + ${(R / N).toFixed(6)})<sup>${N * T}</sup></div>
        <div class="step">Step 4: A = ${P} × ${(Math.pow(1 + R / N, N * T)).toFixed(6)}</div>
        <div class="step">Step 5: A = <strong>₱${A.toFixed(2)}</strong></div>
        <div class="step">Compound Interest = A - P = ₱${A.toFixed(2)} - ₱${P.toFixed(2)} = <strong>₱${interest.toFixed(2)}</strong></div>
    `;

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <h3>Future Value: ₱${A.toFixed(2)}</h3>
        ${explanation}
    `;
}

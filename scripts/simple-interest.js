//Simple Interest
function calculateSI() {
    const P = parseFloat(document.getElementById("principal").value);
    const R = parseFloat(document.getElementById("rate").value);
    const T = parseFloat(document.getElementById("time").value);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
        alert("Please enter valid numeric values.");
        return;
    }

    const SI = (P * R * T) / 100;

    const explanation = `
        <div class="given"><h3> Given: P = ${P}, R = ${R}, T = ${T}</h2></div>
        <div class="step">Step 1: Use the formula <strong>SI = (P × R × T) / 100</strong></div>
        <div class="step">Step 2: Substitute the values: SI = (${P} × ${R} × ${T}) / 100</div>
        <div class="step">Step 3: Multiply: ${P} × ${R} × ${T} = ${P * R * T}</div>
        <div class="step">Step 4: Divide: ${P * R * T} / 100 = <strong>₱${SI.toFixed(2)}</strong></div>
    `;

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <h3>Result: ₱${SI.toFixed(2)}</h3>
        ${explanation}
    `;
}

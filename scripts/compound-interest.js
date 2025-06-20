function calculateCI() {
    const P = parseFloat(document.getElementById("principal").value);
    const R = parseFloat(document.getElementById("rate").value);
    const T = parseFloat(document.getElementById("time").value);
    const resultBox = document.getElementById("result");

    // Reset result box
    resultBox.classList.remove("visible");
    resultBox.innerHTML = "";

    // Validate input
    if (isNaN(P) || isNaN(R) || isNaN(T)) {
        alert("Please enter valid numeric values.");
        return;
    }

    // Compute compound interest
    const A = P * Math.pow(1 + R / 100, T);
    const CI = A - P;

    // Given section
    const given = `
        <div class="given">
            <strong>Given:</strong><br>
            Principal (P) = ₱${P.toLocaleString()}<br>
            Rate (R) = ${R}%<br>
            Time (T) = ${T} year(s)
        </div>
    `;

    // Step-by-step explanation
    const steps = `
        <div class="step">Step 1: Use the formula <strong>A = P(1 + R/100)^T</strong> to get the total amount first</div>
        <div class="step">Step 2: Substitute the values: A = ${P} × (1 + ${R}/100)^${T}</div>
        <div class="step">Step 3: Compute: (1 + ${R}/100) = ${(1 + R/100).toFixed(4)}</div>
        <div class="step">Step 4: Raise to power: ${(1 + R/100).toFixed(4)}^${T} = ${(Math.pow(1 + R/100, T)).toFixed(4)}</div>
        <div class="step">Step 5: Multiply: ${P} × ${(Math.pow(1 + R/100, T)).toFixed(4)} = ₱${A.toFixed(2)}</div>
        <div class="step">Step 6: Subtract the total Amount (A) to the Principal (P) to get the Compound Interest: ₱${A.toFixed(2)} - ₱${P.toLocaleString()} = <strong>₱${CI.toFixed(2)}</strong></div>
    `;

    // Output result
    resultBox.innerHTML = `
        <h3 class="result-heading">Compound Interest: ₱${CI.toFixed(2)}</h3>
        <h3 class="result-heading">Total Amount: ₱${A.toFixed(2)}</h3>
        ${given}
        ${steps}
        <div class="explanation">
            <h3>Explanation:</h3>
            <img src="/images/compound-interest-total.png">
            <img src="/images/compound-interest.png"> <br>
            Compound Interest (CI) is the interest calculated on the initial principal and also on the accumulated interest of previous periods. 
            It is calculated using the formula: <strong>A = P(1 + R/100)^T</strong>, where <strong>CI = A - P</strong>.
            <ul>
                <li><strong>Principal (P):</strong> The original amount of money.</li>
                <li><strong>Rate (R):</strong> The annual interest rate (in percent).</li>
                <li><strong>Time (T):</strong> The number of years the money is invested or borrowed.</li>
                <li><strong>Amount (A):</strong> The total amount after interest.</li>
            </ul>
            The interest is compounded annually, meaning each year's interest is added to the principal for the next year's calculation.
        </div>
    `;

    // Show result with animation
    resultBox.classList.add("visible");
}
function calculateCCI() {
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

    // Compute continuous compound interest
    const A = P * Math.exp((R / 100) * T);
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
        <div class="step">Step 1: Use the formula <strong>A = P × e^(R/100 × T)</strong></div>
        <div class="step">Step 2: Substitute the values: A = ${P} × e^(${R}/100 × ${T})</div>
        <div class="step">Step 3: Compute exponent: (${R}/100) × ${T} = ${(R/100 * T).toFixed(4)}</div>
        <div class="step">Step 4: Compute e^(${(R/100 * T).toFixed(4)}) = ${Math.exp(R/100 * T).toFixed(4)}</div>
        <div class="step">Step 5: Multiply: ${P} × ${Math.exp(R/100 * T).toFixed(4)} = ₱${A.toFixed(2)}</div>
        <div class="step">Step 6: Subtract principal: ₱${A.toFixed(2)} - ₱${P.toLocaleString()} = <strong>₱${CI.toFixed(2)}</strong></div>
    `;

    // Output result
    resultBox.innerHTML = `
        <h3 class="result-heading">Continuous Compound Interest: ₱${CI.toFixed(2)}</h3>
        <h3 class="result-heading">Total Amount: ₱${A.toFixed(2)}</h3>
        ${given}
        ${steps}
        <div class="explanation">
            <h3>Explanation:</h3>
            <img src="/images/continuous-compound-interest-total.png">
            <img src="/images/continuous-compound-interest.png">
            Continuous Compound Interest (CCI) is the interest calculated on the initial principal and accumulated interest, compounded continuously over time. 
            It is calculated using the formula: <strong>A = P × e^(R/100 × T)</strong>, where <strong>CCI = A - P</strong>. <br><br>
            <ul>
                <li><strong>Principal (P):</strong> The original amount of money.</li>
                <li><strong>Rate (R):</strong> The annual interest rate (in percent).</li>
                <li><strong>Time (T):</strong> The number of years the money is invested or borrowed.</li>
                <li><strong>Amount (A):</strong> The total amount after interest.</li>
                <li><strong>e:</strong> The mathematical constant approximately equal to 2.718.</li>
            </ul>
            The interest is compounded continuously, representing the limit of compounding frequency.
        </div>
    `;

    // Show result with animation
    resultBox.classList.add("visible");
}
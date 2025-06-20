function calculateSI() {
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

    // Compute simple interest
    const SI = (P * R * T) / 100;
    const product = P * R * T;

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
        <div class="step">Step 1: Use the formula <strong>SI = (P × R × T) / 100</strong></div>
        <div class="step">Step 2: Substitute the values: SI = (${P} × ${R} × ${T}) / 100</div>
        <div class="step">Step 3: Multiply: ${P} × ${R} × ${T} = ${product}</div>
        <div class="step">Step 4: Divide: ${product} / 100 = <strong>₱${SI.toFixed(2)}</strong></div>
    `;

    // Output result
    resultBox.innerHTML = `
        <h3 class="result-heading">Result: ₱${SI.toFixed(2)}</h3>
        ${given}
        ${steps}
        <div class="explanation">
            <h3>Explanation:</h3>
            <img src="/images/simple-interest.png" alt="simple-interest-formula">
            Simple Interest (SI) is the extra money you earn or pay when you borrow or invest over time. 
            It is calculated using the formula: <strong>SI = (Principal × Rate × Time) / 100</strong>.
            <ul>
                <li><strong>Principal (P):</strong> The original amount of money.</li>
                <li><strong>Rate (R):</strong> The annual interest rate (in percent).</li>
                <li><strong>Time (T):</strong> The number of years the money is invested or borrowed.</li>
            </ul>
            Multiply the principal by the rate and time, then divide by 100 to get the interest.
        </div>

    `;

    // Show result with animation
    resultBox.classList.add("visible");
}

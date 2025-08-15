document.getElementById("convertBtn").addEventListener("click", function () {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unitSelect").value;
    let resultDiv = document.getElementById("result");

    if (isNaN(temp)) {
        resultDiv.textContent = "❌ Please enter a valid temperature.";
        return;
    }

    let convertedValue = "";
    let convertedUnit = "";

    if (unit === "celsius") {
        convertedValue = (temp * 9/5) + 32;
        convertedUnit = "°F (Fahrenheit)";
    } 
    else if (unit === "fahrenheit") {
        convertedValue = (temp - 32) * 5/9;
        convertedUnit = "°C (Celsius)";
    } 
    else if (unit === "kelvin") {
        convertedValue = temp - 273.15;
        convertedUnit = "°C (Celsius)";
    }

    resultDiv.textContent = `✅ Converted Temperature: ${convertedValue.toFixed(2)} ${convertedUnit}`;
});

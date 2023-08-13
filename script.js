document
  .getElementById("temperature-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
    const unit = document.querySelector('input[name="unit"]:checked').value;

    let convertedTemperature;
    // converting the temp
    if (unit === "celsius") {
      convertedTemperature = (temperature * 9) / 5 + 32;
    } else {
      convertedTemperature = ((temperature - 32) * 5) / 9;
    }

    document.getElementById(
      "result"
    ).textContent = `Converted Temperature: ${convertedTemperature.toFixed(
      2
    )}° ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;
  });

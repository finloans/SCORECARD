document.getElementById('calculateButton').addEventListener('click', evaluateProperty);

function evaluateProperty() {
    // Fetch property details
    let propertyType = document.getElementById('propertyType').value;
    let subType = document.getElementById('subType').value;
    let pricePerSqft = parseFloat(document.getElementById('pricePerSqft').value);

    // Fetch criteria scores
    let builderReputation = parseInt(document.getElementById('builderReputation').value);
    let reraRegistration = parseInt(document.getElementById('reraRegistration').value);
    let legalClearances = parseInt(document.getElementById('legalClearances').value);
    let constructionQuality = parseInt(document.getElementById('constructionQuality').value);
    let locationAmenities = parseInt(document.getElementById('locationAmenities').value);
    let pricePaymentPlan = parseInt(document.getElementById('pricePaymentPlan').value);
    let propertySize = parseInt(document.getElementById('propertySize').value);
    let homeLoan = parseInt(document.getElementById('homeLoan').value);
    let timelinePossession = parseInt(document.getElementById('timelinePossession').value);
    let agreement = parseInt(document.getElementById('agreement').value);
    let resaleRental = parseInt(document.getElementById('resaleRental').value);

    // Validate if required fields are filled
    if (isNaN(pricePerSqft)) {
        document.getElementById('result').innerText = "Please enter a valid price per sq. ft.";
        return;
    }

    // Calculate total score
    let totalScore = builderReputation + reraRegistration + legalClearances + constructionQuality +
                     locationAmenities + pricePaymentPlan + propertySize + homeLoan +
                     timelinePossession + agreement + resaleRental;

    // Determine if the property is worth the money
    let recommendation = (totalScore >= 70 && pricePerSqft <= 8000) ? "Worth the investment" : "Not worth the money";

    // Display result
    let resultText = `Property Type: ${propertyType} - ${subType}\n`;
    resultText += `Price Per Sq. Ft.: ₹${pricePerSqft.toFixed(2)}\n`;
    resultText += `Total Score: ${totalScore}/110\n`;
    resultText += `Recommendation: ${recommendation}`;

    document.getElementById('result').innerText = resultText;
}


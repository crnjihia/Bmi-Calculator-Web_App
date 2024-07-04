document.getElementById('calculate').addEventListener('click', function() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let unit = document.querySelector('input[name="unit"]:checked').value;
    let bmi = 0;

    if (unit === 'metric') {
        bmi = weight / ((height / 100) ** 2);
    } else {
        bmi = (weight / (height ** 2)) * 703;
    }

    bmi = bmi.toFixed(2);

    document.getElementById('bmi-value').innerText = bmi;
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        document.getElementById('bmi-category').style.color = 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        document.getElementById('bmi-category').style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        document.getElementById('bmi-category').style.color = 'orange';
    } else {
        category = 'Obese';
        document.getElementById('bmi-category').style.color = 'red';
    }

    document.getElementById('bmi-category').innerText = category;
});

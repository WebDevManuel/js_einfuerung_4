function adult() {
    const ageInput = document.querySelector('input[type="number"]');
    if (ageInput.value < 18) {
        document.querySelector('form p').innerHTML =
            "Please come back, when you're old enough!"
    } else {
        document.querySelector('p').innerHTML =
            "Come in and have fun ;)"
    };
};

function weather() {
    let qualityInput = document.querySelector('.weatherApp input').value;
    if (qualityInput <= 2) {
        document.querySelector('.weatherApp span').innerHTML = "BAD"
    } else if (qualityInput >= 3 && qualityInput <= 5) {
        document.querySelector('.weatherApp span').innerHTML = "OKAY"
    } else if (qualityInput >= 6 && qualityInput <= 7) {
        document.querySelector('.weatherApp span').innerHTML = "GOOD"
    } else if (qualityInput >= 8 && qualityInput <= 10) {
        document.querySelector('.weatherApp span').innerHTML = "BEST"
    } else {
        document.querySelector('.weatherApp span').innerHTML = "Gimme a quality between 0 'n 10"

    }
};

function checkAirQuality() {
    let qualityRanger = document.querySelector('.airQualityApp input').value;
    const highlight = document.getElementById('background_warning').classList;
    console.log(qualityRanger);
    if (qualityRanger <= 50) {
        document.querySelector('label span').innerHTML = qualityRanger + "%",
            document.querySelector('.airQualityApp .hc').innerHTML = "GOOD",
            document.querySelector('.airQualityApp .he').innerHTML = "NO RISK"
        highlight.add('green'),
            highlight.remove('orange', 'red')

    } else if (qualityRanger > 50 && qualityRanger <= 100) {
        document.querySelector('label span').innerHTML = qualityRanger + "%",
            document.querySelector('.airQualityApp .hc').innerHTML = "MODERATE",
            document.querySelector('.airQualityApp .he').innerHTML = "ACCEPTABLE",
            highlight.add('orange'),
            highlight.remove('red', 'green')
    } else if (qualityRanger > 100 && qualityRanger <= 150) {
        document.querySelector('label span').innerHTML = qualityRanger + "%",
            document.querySelector('.airQualityApp .hc').innerHTML = "UNHEALTHY",
            document.querySelector('.airQualityApp .he').innerHTML = "PUBLICS NOT AFFECTED",
            highlight.add('red')
    }
};

function differ() {
    let x = document.getElementById('multi27').value;
    if ((x - 27) > 27) {
        x = (x - 27) * 2;
        console.log(x);
    }
};
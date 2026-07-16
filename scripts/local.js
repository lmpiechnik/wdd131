
// Footer

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;


// Static Weather Data

const temperature = 8;
const windSpeed = 18;


// Wind Chill Formula (Metric)

function calcularSensacaoTermica(temp, wind){

    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(wind, 0.16)) +
        (0.3965 * temp * Math.pow(wind, 0.16))
    ).toFixed(1);

}


const windChill = document.querySelector("#windChill");

if(temperature <= 10 && windSpeed > 4.8){

    windChill.textContent =
        `${calcularSensacaoTermica(temperature, windSpeed)} °C`;

}else{

    windChill.textContent = "N/A";

}
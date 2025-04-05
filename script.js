
function image(status, city) {

    const condition = ["thunderstorm", "rain", "drizzle", "haze", "clear sky", "sunny", "few clouds", "clouds"];
    result = condition.filter(condition => status.includes(condition));

    if (result[0] === 'haze' || result[0] == 'few clouds') {
         
        city[0].children[0].children[2].style = "visibility:visible;opacity:0.5";
        city[0].children[0].children[0].style = "visibility:visible";
    }



    else if (result[0] === "sunny" || result[0] === "clear sky") {

        city[0].children[0].children[0].style = "visibility:visible";

    }

    else if (result[0] === 'rain' || result[0] === 'thunderstorm' || result[0] === 'drizzle') {

        city[0].children[0].children[2].style = "visibility:visible";
        city[0].children[0].children[3].style = "visibility:visible";
        city[0].children[0].children[1].style = "visibility:visible";

    }

    else if (result[0] === 'clouds') {

        city[0].children[0].children[2].style = "visibility:visible;opacity:0.5";

    }

}

document.addEventListener("DOMContentLoaded", () => {


    const first_loc = document.getElementById('first_loc');
    const first_status = document.getElementById('first_status');
    const first_city = document.querySelectorAll('#city1');
    const first_temp = document.getElementById('first_high');
    const first_hum = document.getElementById('first_low');




    fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=d1095682906d7603c8ae0f93fd5c214e")
        .then(response => response.json())
        .then(a => {

            const kolkata_loc = a.name;
            const kolkata_status = a.weather[0].description;
            const kolkata_temp = a.main.temp;
            const kolkata_hum = a.main.humidity;





            first_loc.innerHTML = kolkata_loc;
            first_status.innerHTML = kolkata_status;
            image(kolkata_status, first_city);
            first_temp.innerHTML = Math.trunc(kolkata_temp - 273.15) + "c";
            first_hum.innerHTML = kolkata_hum + "%";




        });

})







document.addEventListener("DOMContentLoaded", () => {


    const second_loc = document.getElementById('second_loc');
    const secoud_status = document.getElementById('second_status');
    const second_city = document.querySelectorAll('#city2');
    const second_temp = document.getElementById('second_high');
    const second_hum = document.getElementById('second_low');




    fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=d1095682906d7603c8ae0f93fd5c214e")
        .then(response => response.json())
        .then(b => {

            const delhi_loc = b.name;
            const delhi_status = b.weather[0].description;
            const delhi_temp = b.main.temp;
            const delhi_hum = b.main.humidity;





            second_loc.innerHTML = delhi_loc;
            second_status.innerHTML = delhi_status;
            image(delhi_status, second_city);
            second_temp.innerHTML = Math.trunc(delhi_temp - 273.15) + "c";
            second_hum.innerHTML = delhi_hum + "%";




        });

})





document.addEventListener("DOMContentLoaded", () => {


    const third_loc = document.getElementById('third_loc');
    const third_status = document.getElementById('third_status');
    const third_city = document.querySelectorAll('#city3');
    const third_temp = document.getElementById('third_high');
    const third_hum = document.getElementById('third_low');




    fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=d1095682906d7603c8ae0f93fd5c214e")
        .then(response => response.json())
        .then(c => {

            const chennai_loc = c.name;
            const chennai_status = c.weather[0].description;
            const chennai_temp = c.main.temp;
            const chennai_hum = c.main.humidity;





            third_loc.innerHTML = chennai_loc;
            third_status.innerHTML = chennai_status;
            image(chennai_status, third_city);
            third_temp.innerHTML = Math.trunc(chennai_temp - 273.15) + "c";
            third_hum.innerHTML = chennai_hum + "%";




        });

})







document.addEventListener("DOMContentLoaded", () => {


    const forth_loc = document.getElementById('forth_loc');
    const forth_status = document.getElementById('forth_status');
    const forth_city = document.querySelectorAll('#city4');
    const forth_temp = document.getElementById('forth_high');
    const forth_hum = document.getElementById('forth_low');




    fetch("https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d1095682906d7603c8ae0f93fd5c214e")
        .then(response => response.json())
        .then(d => {

            const mumbai_loc = d.name;
            const mumbai_status = d.weather[0].description;
            const mumbai_temp = d.main.temp;
            const mumbai_hum = d.main.humidity;




            forth_loc.innerHTML = mumbai_loc;
            forth_status.innerHTML = mumbai_status;
            image(mumbai_status, forth_city);
            forth_temp.innerHTML = Math.trunc(mumbai_temp - 273.15) + "c";
            forth_hum.innerHTML = mumbai_hum + "%";




        });

})



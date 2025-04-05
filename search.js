function search() {

    const loc = document.getElementById('search_box').value;
    const search = document.getElementById('search_result');
    let location = document.getElementById('result_loc');
    let result = document.getElementById('result_result');
    let temp = document.getElementById('result_temp');
    let feel = document.getElementById('result_feel');
    let cloud = document.getElementById('result_cloud');
    let hum = document.getElementById('result_hum');
    let wind = document.getElementById('result_wind');
    let pressure = document.getElementById('pressure');


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=d1095682906d7603c8ae0f93fd5c214e&units=metric`)
        .then(response => response.json())
        .then(a => {


            if (a.message=="city not found" || a.cod=="404") {
                alert("Your city was not found. Please click on the 'Use Current Location' button.");
                
            }
            else{
            location.innerHTML = a.name;
            result.innerHTML = a.weather[0].description;
            temp.innerHTML = Math.trunc(a.main.temp) + "c";
            feel.innerHTML = Math.trunc(a.main.feels_like) + "c";
            cloud.innerHTML = a.clouds.all + "%";
            hum.innerHTML = a.main.humidity + "%";
            wind.innerHTML = Math.trunc((a.wind.speed) * 3.6) + "km";
            pressure.innerHTML = a.main.pressure + "hPa"







            search.style.visibility = 'visible';}





        })}









function result_close() {
    const search = document.getElementById('search_result');
    search.style.visibility = 'hidden';



}


function get_location(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( succses ,error);   
    }
}
function succses(position){

const latitude=position.coords.latitude;
const longitude=position.coords.longitude;

get_location_result(latitude,longitude);


}

function error(){
  alert("Sorry! I am face some problems.........")
}



function get_location_result(latitude,longitude) {

   
    const search = document.getElementById('search_result');
    let location = document.getElementById('result_loc');
    let result = document.getElementById('result_result');
    let temp = document.getElementById('result_temp');
    let feel = document.getElementById('result_feel');
    let cloud = document.getElementById('result_cloud');
    let hum = document.getElementById('result_hum');
    let wind = document.getElementById('result_wind');
    let pressure = document.getElementById('pressure');


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d1095682906d7603c8ae0f93fd5c214e&units=metric`)
        .then(response => response.json())
        .then(a => {

            

            location.innerHTML = a.name;
            result.innerHTML = a.weather[0].description;
            temp.innerHTML = Math.trunc(a.main.temp) + "c";
            feel.innerHTML = Math.trunc(a.main.feels_like) + "c";
            cloud.innerHTML = a.clouds.all + "%";
            hum.innerHTML = a.main.humidity + "%";
            wind.innerHTML = Math.trunc((a.wind.speed) * 3.6) + "km";
            pressure.innerHTML = a.main.pressure + "hPa"







            search.style.visibility = 'visible';





        })}




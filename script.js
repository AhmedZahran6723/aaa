/************************************ Start Registeration  ***********************************/
// console.log(document.getElementsByClassName("register")[0].children[0].children[0].children[1]) //<span>signUp<span>
// document.getElementsByClassName("register")[0].children[0].children[0].children[1].onclick = function() {
//     this.parentElement.nextElementSibling.style = "display:block";
//     this.parentElement.nextElementSibling.nextElementSibling.style = "display:none";

// }

// document.getElementsByClassName("register")[0].children[0].children[0].children[0].onclick = function() {
//     this.parentElement.nextElementSibling.style = "display:none";
//     this.parentElement.nextElementSibling.nextElementSibling.style = "display:block";

// }


// // show and hidden password

// document.getElementsByClassName("pass")[0].previousElementSibling.onmouseover = function() {
//     this.setAttribute("type", "text")
// }
// document.getElementsByClassName("pass")[0].previousElementSibling.onmouseout = function() {
//     this.setAttribute("type", "password")
// }

/************************************ End Registeration  ***********************************/
// Start Footer Map
window.addEventListener("load", doitfirst)

function doitfirst() {
    mymap = document.getElementById("location")
}
//check availability
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getposition, errorhandeler)
} else {
    mymap.innerText = "Update Ur Browser"
}

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });
// }

function getposition(position) {
    // alert("succes")
    // console.log(arguments)
    //get location data and display it witin div
    lat = position.coords.latitude;
    log = position.coords.longitude;
    // latlog = lat + "," + log;
    // mymap.innerText = latlog;
    // time = position.timestamp;

    //google
    //create latlog object "google"

    mylocation = new google.maps.LatLng(lat, log)
        //2-specs
    myspecs = { zoom: 17, center: mylocation }
        //3-create img to recive map
    var myimg = new Image();
    myimg.src = new google.maps.Map(mymap, myspecs);
    //4-display img
    mymap.appendChild(myimg)
}

function errorhandeler(error) {
    //console.log(arguments[0])
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mymap.innerText = "USER DENIED GEOLOCATION PERMITION";
            break;
        case error.POSITION_UNAVAILABLE:
            mymap.innerText = "POSITION_UNAVAILABLE";
            break;
        case error.TIMEOUT:
            mymap.innerText = "TIMEOUT"
            break;
        case error.UNKOWN_ERROR:
            mymap.innerText = "UNKOWN_ERROR"
            break;
        default:
            break;
    }

}
// End Footer Map
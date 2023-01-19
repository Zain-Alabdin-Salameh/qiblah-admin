// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
let map;

// function initMap() {
//   const mapOptions = {
//     zoom: 8,
//     center: { lat: -34.397, lng: 150.644 },
//   };

//   map = new google.maps.Map(document.getElementById("map"), mapOptions);

//   const marker = new google.maps.Marker({
//     // The below line is equivalent to writing:
//     // position: new google.maps.LatLng(-34.397, 150.644)
//     position: { lat: -34.397, lng: 150.644 },
//     map: map,
//   });
//   // You can use a LatLng literal in place of a google.maps.LatLng object when
//   // creating the Marker object. Once the Marker object is instantiated, its
//   // position will be available as a google.maps.LatLng object. In this case,
//   // we retrieve the marker's position using the
//   // google.maps.LatLng.getPosition() method.
//   const infowindow = new google.maps.InfoWindow({
//     content: "<p>Marker Location:" + marker.getPosition() + "</p>",
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.open(map, marker);
//   });
// }

// window.initMap = initMap;


//Function To Showing the map when click on the icon
function ShowMap(lat,lon) {
  console.log(lat)
  const mapOptions = {
    zoom: 8,
    center: { lat: lat, lng: lon},
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: { lat: lat, lng: lon },
    map: map,
  });
  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
	document.getElementById("map").style.display= "block";
	document.getElementById("Close").style.display= "block";
}


//Function To Hide Map When Click On Close Icon
    function HideMap() {
        const btnClose = document.getElementById("Close");
        const map = document.getElementById("map");
        map.style.display = "none"; btnClose.style.display = "none";
    }





    //Login and Sign up page
    
    const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

  //  show/hide password and change icon
  pwShowHide.forEach(eyeIcon =>{
      eyeIcon.addEventListener("click", ()=>{
          pwFields.forEach(pwField =>{
              if(pwField.type ==="password"){
                  pwField.type = "text";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye-slash", "uil-eye");
                  })
              }else{
                  pwField.type = "password";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye", "uil-eye-slash");
                  })
              }
          }) 
      })
  })

  //  appear signup and login form
  signUp.addEventListener("click", ( )=>{
      container.classList.add("active");
  });
  login.addEventListener("click", ( )=>{
      container.classList.remove("active");
  });


  function validateform(){  
    var name = document.getElementById("email");
    var password = document.getElementById("password");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      
    if (name.value == null || name.value == ""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.value.length<6 || password.value == ""){  
      alert("Password must be at least 6 characters long. OR Cannot be empty");  
      return false;  
      }  
      else if(!(name.value.match(validRegex))){
        alert("Email is not valid")
        return false;
        
      }
    
  }


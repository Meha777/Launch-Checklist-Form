// Write your JavaScript code here!


   window.addEventListener("load", function() {
      const json = fetch("planets.json");
      json.then(function(response){
         response.json().then( function(json) {
            
      });
      const form = document.querySelector("form");
      form.addEventListener("submit",function(event) {
         event.preventDefault();

         // const planet = require('./planets.json');
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

          
         if (pilotName.value === "" || copilotName.value === "" || 
               fuelLevel.value === "" || cargoMass.value === "" ) 
         {
            
            alert("All fields are required!")

         } else if (!isNaN(pilotName.value)   || 
            !isNaN(copilotName.value)  || isNaN( fuelLevel.value) || 
            isNaN(cargoMass.value)) 
         {
            alert("Make sure to enter valid information for each field.")
         };
      
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `Pilot Chris is ready for lanuch`;
      
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `Co-pilot Blake is ready for launch`;
      
         let fuelStatus = document.getElementById("fuelStatus");
         fuelStatus.innerHTML = `Fuel level high enough for launch`;

         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;

         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = `Awaiting Information Before Launch`;

         let visibilityStatus = document.getElementById("faultyItems");

         if(fuelLevel.value < 10000) {
            visibilityStatus.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level is too low for launch`;
           
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red"
            
         }  else  if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = `cargo mass is too large for launch`;
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               launchStatus.style.color = "red"
         }  else { 
               launchStatus.innerHTML = "Shuttle is ready for launch";
               launchStatus.style.color = "green";
            } 
         });

         // import { } from './planets.json';
         let missionDestination = document.getElementById("missionTarget")
         missionDestination = './planets.json'
         

         // for (x in missionDestination) {
         //    document.getElementById("demo").innerHTML += myObj[x];
         //  }
         missionDestination.innerHTML =` 
         <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${missionDestination.value}</li>
         <li>Diameter: ${missionDestination.value}</li>
         <li>Star: ${missionDestination.value}</li>
         <li>Distance from Earth: ${missionDestination.value}</li>
         <li>Number of Moons: ${missionDestination.value}</li>
      </ol>
      <img src="${missionDestination.value}">` 
         
   });
});

//  This block of code shows how to format the HTML once you fetch some planetary JSON!

//  <h2>Mission Destination</h2>
// `<ol>
//    <li>Name: ${json[3][]}</li>
//    <li>Diameter: ${json[3].diameter}</li>
//    <li>Star: ${json[3].star}</li>
//    <li>Distance from Earth: ${json[3].distance}</li>
//    <li>Number of Moons: ${json[3].moons}</li>
// </ol>
// <img src="${json[3].image}">` 





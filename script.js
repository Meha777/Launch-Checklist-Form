// Write your JavaScript code here!


   window.addEventListener("load", function() {
      
      const json = fetch("planets.json");
      json.then(function(response){
         response.json().then( function(json) {
         
         const destination = document.getElementById("missionTarget");
          
               
                  destination.innerHTML =` 
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
               <img src="${json[0].image}">`
            
         });
      });
      const form = document.querySelector("form");
      form.addEventListener("submit",function(event) {
         event.preventDefault();

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
            visibilityStatus.style.visibility = "visible";
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               launchStatus.style.color = "red"
         }  else { 
               launchStatus.innerHTML = "Shuttle is ready for launch";
               launchStatus.style.color = "green";
            } 
         });
      });
         
      
         
   






// Write your JavaScript code here!


   window.addEventListener("load", function() {
      const form = document.querySelector("form");
      form.addEventListener("submit",function(event) {
         event.preventDefault()
            
   
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

         if (pilotName.value === "" || copilotName.value === "" || 
            fuelLevel.value === "" || cargoMass.value === "" ) 
         {
            alert("All fields are required!")

         } else if (typeof pilotName.value !== 'string' || 
            typeof copilotName.value !== 'string' || isNaN(fuelLevel) || 
            isNaN(cargoMass) )
         {
            alert("Make sure to enter valid information for each field.")
         }
           
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `Pilot Chris is ready for lanuch`

         let copilotStatus = document.getElementById("copilotStatus");
         copiloteStatus.innerHTML = `Co-pilot Blake is ready for launch`

         let fuelStatus = document.getElementById("fuelStatus");
         copilateStatus.innerHTML = `Fuel level high enough for launch`

         let cargoStatus = document.getElementById("cargoStatus");
         copilateStatus.innerHTML = `Cargo mass low enough for launch`

         let launchStatus = document.getElementById("launchStatus");
         if( fuelStatus < 10000) {
            lau
         }
          const mylauch = function() {

          }
         // lauchStatus.value === `Shuttle not ready for launch`
         if(fuelStatus < 10000 ){
            alert(`With only ${fuelStatus.value} liters of fuel, the shuttle is not ready.\n
             ${fuelStatus.value} is not enough fuel for the shuttle to lauch.`)
         }

         // With only 890 liters of fuel, the status of the launch becomes red and states that the shuttle is not ready.
         //  The list has also updated to indicate that that is not enough fuel for the shuttle to launch.
         
         
         
         
         
          
   
   });
});

// window.alert("String message")
// window.confirm("String message")

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

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

         } else if (!isNaN(pilotName.value)   || 
            !isNaN(copilotName.value)  || isNaN( fuelLevel.value) || 
            isNaN(cargoMass.value)) 
         {
            alert("Make sure to enter valid information for each field.")
         };
        

         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `Pilot Chris is ready for lanuch`
      
         let copilotStatus = document.getElementById("copilotStatus");
         copiloteStatus.innerHTML = `Co-pilot Blake is ready for launch`
      
         let fuelStatus = document.getElementById("fuelStatus");
         fuelStatus.innerHTML = `Fuel level high enough for launch`

         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML = `Cargo mass low enough for launch`

         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = `Awaiting Information Before Launch`

         let faultyStatus = document.getElementById("faultyItems");

        

      
         if(fuelLevel.value < 10000) {
            event.preventDefault()
            fuelStatus.innerHTML = `Fuel level is too low for launch`
         

            faultyStatus.innerHTML = `
            <ol>
                    <li>${pilotStatus.innerHTML}</li>
                    <li>${copilotStatus.innerHTML}</li>
                    <li>${fuelStatus.innerHTML}</li>
                    <li>${cargoStatus.innerHTML}</li>
          </ol>
            `
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red"
            
         }    
         

         if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = `cargo mass is too large for launch`
            faultyStatus.innerHTML = `
           < ol>
                    <li>${pilotStatus.innerHTML}</li>
                    <li>${copiloteStatus.innerHTML}</li>
                    <li>${fuelStatus.innerHTML}</li>
                    <li>${cargoStatus.innerHTML}</li>
          </ol>
               `
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               launchStatus.style.color = "red"
         }

         if (pilotStatus.innerHTML === `Pilot Chris is ready for lanuch` && 
            copiloteStatus.innerHTML === `Co-pilot Blake is ready for launch` &&
            fuelStatus.innerHTML === `Fuel level high enough for launch` &&
            cargoStatus.innerHTML === `Cargo mass low enough for launch`){
               launchStatus.innerHTML = "Shuttle is ready for launch"
               launchStatus.style.color = "green"
            }


   });
});





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

// "Shuttle not ready for launch"
   // let launchStatus = document.getElementById("launchStatus");
            // launchStatus.innerHTML = `Shuttle not ready for launch `
            // let faultyItems = document.getElementById("faultyItems");
            // faultyItems.visibility === visible;
            //    launchStatus.style.color === "red";
// alert(`With only ${fuelLevel.value} liters of fuel, the shuttle is not ready.\n
// ${fuelLevel.value} liters is not enough fuel for the shuttle to lauch.`)
   
// let launchStatus = document.getElementById("launchStatus");
         // if( fuelLevel.value < 10000) {
         //    launchStatus.innerHTML = `Shuttle not ready for launch `
         //    let faultyItems = document.getElementById("faultyItems");
         //    
         //       launchStatus.style.color === "red";  
         //   }
         // }

// window.alert("String message")
// window.confirm("String message")
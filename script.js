window.addEventListener("load",function(){// Write your JavaScript code here!
  let form=document.querySelector('form');
  form.addEventListener('submit',function(){
    let pilotName=document.querySelector("input[name=pilotName]");
    let copilotName=document.querySelector("input[name=copilotName]");
    let fuelLevel=document.querySelector("input[name=fuelLevel]");
    let cargoMass=document.querySelector("input[name=cargoMass]");
    if(pilotName.value==="" || copilotName.value==="" || fuelLevel.value==="" || cargoMass.value===""){
      alert("All fields are Required!");
      event.preventDefault();
    } else if(typeof(pilotName.value)!=='string' || typeof(copilotName.value)!=='string'){
      alert("must be letters");
      event.preventDefault();
    } else if(isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))){
      alert("Fuel Level and Cargo Mass must only be numbers");
      event.preventDefault();
    } else{
    
      let pilotStatus=document.getElementById("pilotStatus");
      let copilotStatus=document.getElementById("copilotStatus");
      pilotStatus.innerHTML=`Pilot ${pilotName} ready.`;
      copilotStatus.innerHTML=`Copilot ${copilotName} ready.`;
      let launchStatus=document.getElementById("launchStatus");

      if(fuelLevel.value<"10000"){
        let faultyItems=document.getElementById("faultyItems");
        faultyItems.style.visibility="visible";
        let fuelStatus=document.getElementById("fuelStatus");
        fuelStatus.innerHTML=`Fuel too low for journey.`;
        launchStatus.innerHTML=`Shuttle not ready for launch!`;
        launchStatus.style.color='red';
      }
    }

//look up if statements and template literals
//add if and then add class if it is active to make it green...setAttribute???

  })
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
});
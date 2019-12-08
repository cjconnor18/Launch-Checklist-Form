window.addEventListener("load",function(){// Write your JavaScript code here!
  let form=document.querySelector('form');
  const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json");
  fetchPromise.then( function(response) {
    const jsonPromise = response.json();
    jsonPromise.then( function(json) {
      let selectedLocation=json[4];
      let missionTarget=document.getElementById("missionTarget");
      missionTarget.innerHTML=`
        <h2>Mission Destination</h2>
        <ol>
          <li>Name: ${selectedLocation.name}</li>
          <li>Diameter: ${selectedLocation.diameter}</li>
          <li>Star: ${selectedLocation.star}</li>
          <li>Distance from Earth: ${selectedLocation.distance}</li>
          <li>Number of Moons: ${selectedLocation.moons}</li>
        </ol>
        <img src="${selectedLocation.image}">
      `;
    });
  });
  form.addEventListener('submit',function(){
    let pilotName=document.querySelector("input[name=pilotName]");
    let copilotName=document.querySelector("input[name=copilotName]");
    let fuelLevel=document.querySelector("input[name=fuelLevel]");
    let cargoMass=document.querySelector("input[name=cargoMass]");

    

    let pilotStatus=document.getElementById("pilotStatus");
    let copilotStatus=document.getElementById("copilotStatus");
    let fuelStatus=document.getElementById("fuelStatus");
    let cargoStatus=document.getElementById("cargoStatus");

    let launchStatus=document.getElementById("launchStatus");
    
    function changeVisibility(){
      let faultyItems=document.getElementById("faultyItems");
      faultyItems.style.visibility="visible";
    }
    function launchNotReady(){
      launchStatus.innerHTML=`Shuttle not ready for launch!`;
      launchStatus.style.color='red';
      event.preventDefault();
    }
    

    if(pilotName.value==="" || copilotName.value==="" || fuelLevel.value==="" || cargoMass.value===""){
      alert("All fields are Required!");
      event.preventDefault();
    } else if(!isNaN(Number(pilotName.value))|| !isNaN(Number(copilotName.value))||isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))){
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
    } 
    
    pilotStatus.innerHTML=`Pilot ${pilotName.value} ready.`;
    copilotStatus.innerHTML=`Copilot ${copilotName.value} ready.`;
    function fuelTooLow(){
      fuelStatus.innerHTML=`Fuel too low for journey!`;
    }
    function massTooHigh(){
      cargoStatus.innerHTML=`Too much mass for the shuttle to take off!`
    }

    if(fuelLevel.value<"10000"||cargoMass.value>10000){
      if(fuelLevel.value<"10000"&&cargoMass.value>10000){
        fuelTooLow();
        massTooHigh();
      } else if(fuelLevel.value<"10000"){
        fuelTooLow();
      } else {
        massTooHigh();
      }
      changeVisibility();
      launchNotReady();
    } else {
      launchStatus.innerHTML=`Shuttle is ready for launch!`;
      launchStatus.style.color='green';
      event.preventDefault();
    }
  });
});

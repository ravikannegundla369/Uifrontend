
let myhobbies = ["fishing", "watching movies", "travel"];


function addHobby(newHobby) {
    myhobbies.push(newHobby);
  console.log("Added the hobbie");
}


function displayHobbies() {
  console.log("My hobbies are :");
  console.log(myhobbies);
}

function deleteHobby(hobbyToDelete) {
  
  const deleteindex = myhobbies.indexOf(hobbyToDelete);
  
  if (deleteindex > -1) 
  {
    myhobbies.splice(deleteindex, 1);
    console.log("Deleted the hobbie from list");
  } 
  
  else 
  {
    console.log("hobbie does not exist in hobbies");
  }
}


displayHobbies(); 
addHobby("cooking");
displayHobbies(); 

deleteHobby("travel");
displayHobbies();
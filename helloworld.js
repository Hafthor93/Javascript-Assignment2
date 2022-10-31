const harry = {
    firstName: "Harry",
    lastName: "Potter",
    hairColor: "black",
  };
  
  const hermione = {
    firstName: "Hermione",
    lastName: "Granger",
    hairColor: "brown",
  };
  
  const ron = {
    firstName: "Ron",
    lastName: "Weasley",
    hairColor: "red",
  };

  const renderAllTheWizards = (wizardList) => {

    const list = document.getElementById("list");
    wizardList.forEach((wizard) => {
      const listItem = document.createElement("li")
      listItem.innerHTML = `${wizard.firstName} ${wizard.lastName}`
      listItem.style.color = wizard.hairColor;

      list.appendChild(listItem);
    });

  };
  const wizardList = [harry, hermione, ron];
renderAllTheWizards(wizardList);
//console.log(wizardList);
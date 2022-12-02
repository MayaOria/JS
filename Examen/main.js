window.onload = function () {

  const divInscription = document.getElementById("inscription");
  const divResult = document.getElementById("result");
  const btnEnregistrer = document.getElementById("enregistrer");
  const btnRetour = document.getElementById("retour");
  const btnAjoutEnfant = document.getElementById("ajout_enfant");
  const fieldsetEnfants = document.getElementById("enfants");
  const btnSupprimerEnfant = document.getElementById("supprimer_enfant");
  const p = document.querySelector("#result>p");

  let nbEnfants = 1;
  let displayInscription = true;
  let ulParents = document.createElement("ul");

  const toogleDisplay = (display) => {
    if (display) {
      divInscription.style.display = "block";
      divResult.style.display = "none";
    } else {
      divInscription.style.display = "none";
      divResult.style.display = "block";
    }
  };

  toogleDisplay(displayInscription);

  btnAjoutEnfant.addEventListener("click", (e) => {
    nbEnfants++;
    console.log(nbEnfants);
    console.log(e.target);

    let fieldset = document.createElement("fieldset");
    fieldset.setAttribute("id", `enfant_${nbEnfants}`);

    let legend = document.createElement("legend");
    legend.innerHTML = `Enfant ${nbEnfants}`;
    fieldset.appendChild(legend);

    let divLastname = document.createElement("div");
    let labelLastname = document.createElement("label");
    labelLastname.setAttribute("for", `e${nbEnfants}_lastname`);
    labelLastname.innerText = "Nom : ";
    let inputLastname = document.createElement("input");
    inputLastname.setAttribute("id", `e${nbEnfants}_lastname`);
    divLastname.appendChild(labelLastname);
    divLastname.appendChild(inputLastname);
    fieldset.appendChild(divLastname);

    let divFirstname = document.createElement("div");
    let labelFirstname = document.createElement("label");
    labelFirstname.setAttribute("for", `e${nbEnfants}_firstname`);
    labelFirstname.innerText = "Prénom : ";
    let inputFirstname = document.createElement("input");
    inputFirstname.setAttribute("id", `e${nbEnfants}_firstname`);
    divFirstname.appendChild(labelFirstname);
    divFirstname.appendChild(inputFirstname);
    fieldset.appendChild(divFirstname);

    let divBirthdate = document.createElement("div");
    let labelBirthdate = document.createElement("label");
    labelBirthdate.setAttribute("for", `e${nbEnfants}_birthdate`);
    labelBirthdate.innerText = "Date de naissance : ";
    let inputBirthdate = document.createElement("input");
    inputBirthdate.setAttribute("id", `e${nbEnfants}_birthdate`);
    inputBirthdate.setAttribute("type", `date`);
    divBirthdate.appendChild(labelBirthdate);
    divBirthdate.appendChild(inputBirthdate);
    fieldset.appendChild(divBirthdate);
    fieldsetEnfants.appendChild(fieldset);
  });

  btnSupprimerEnfant.addEventListener("click", (e) => {
    console.log(nbEnfants);
    console.log(e.target);
    fieldsetEnfants.removeChild(document.getElementById(`enfant_${nbEnfants}`));
    nbEnfants--;
    if (fieldsetEnfants.childNodes.length < 1) {
      btnSupprimerEnfant.setAttribute("disabled", "");
    }
  });

  btnEnregistrer.addEventListener("click", () => {
    displayInscription = false;
    toogleDisplay(displayInscription);

    let liParent1 = document.createElement("li");
    let liParent2 = document.createElement("li");
    let p1 = getIdentity("p1_firstname", "p1_lastname", "p1_birthdate");
    let p2 = getIdentity("p2_firstname", "p2_lastname", "p2_birthdate");
    liParent1.innerHTML = `${p1.firstname} ${p1.lastname} ${p1.birthdate}`;
    liParent2.innerHTML = `${p2.firstname} ${p2.lastname} ${p2.birthdate}`;

    addClassList(document.form_inscription.p1_gender.value, liParent1);
    addClassList(document.form_inscription.p2_gender.value, liParent2);

    ulParents.appendChild(liParent1);
    ulParents.appendChild(liParent2);

    let ulEnfants = document.createElement("ul");
    for (let i = 1; i <= nbEnfants; i++) {
      let e_li = document.createElement("li");
      let enfant = getIdentity(`e${i}_firstname`,`e${i}_lastname`,`e${i}_birthdate`);
      e_li.innerHTML = `${enfant.firstname} ${enfant.lastname} ${enfant.birthdate}`;
      ulEnfants.appendChild(e_li);
    }

    ulParents.appendChild(ulEnfants);
    divResult.prepend(ulParents);
    p.style.display = "none";
  });

  btnRetour.addEventListener("click", () => {
    displayInscription = true;
    toogleDisplay(displayInscription);
    ulParents.innerHTML = "";
  });

  const addClassList = (gender, liParent) => {
    switch (gender) {
      case "men":
        liParent.classList.add("men");
        break;
      case "women":
        liParent.classList.add("women");
        break;
      case "other":
        liParent.classList.add("other");
        break;
    }
  };

  const getIdentity = (id_firstname, id_lastname, id_birthdate) => {
    let identity = {
      firstname: document.getElementById(id_firstname).value,
      lastname: document.getElementById(id_lastname).value,
      birthdate: `(né en ${document
        .getElementById(id_birthdate)
        .value.slice(0, 4)})`,
    };
    return identity;
  };
};

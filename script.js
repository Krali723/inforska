function jednicka() {
  let jm = document.getElementById("jmeno").value;
  //vypis do konzole
  console.log(jm);
  //alert("no nazdar " + jm + "!");

}

function vysledek() {
  let c1 = document.getElementById("cislo1").valueAsNumber;
  let c2 = document.getElementById("cislo2").valueAsNumber;
  let op = document.getElementById("operace").value;

  let vysl = "?";
  if (isNaN(c1)) {
    alert("Neni zadano prvni cislo");
  } 
  
  else if (isNaN(c2)) {
    alert("Neni zadano druhe cislo");
  } 
  
  else if (op == "plus"){
    vysl = c1 + c2;
  } 
  
  else if (op == "minus") {
    vysl = c1 - c2;
  }
  else if (op == "nasobeni") {
    vysl = c1 * c2;
  }
  else if (op == "deleni") {
    if (c2 == 0){
      alert("I ty srando.");
    }
    vysl = c1 / c2;
  }
  document.getElementById("vysl").value = vysl;
  document.getElementById("vysledek2").innerHTML = "Výsledek je <b>" + vysl + "<b>.";
  
}

document.querySelector("#tipo-seguro").addEventListener("change", function() {
    var valor = "";
  
    switch (this.value) {
      case "basico":
        valor = "$500";
        break;
      case "intermedio":
        valor = "$1000";
        break;
      case "premium":
        valor = "$1500";
        break;
    }
  
    document.querySelector("#valor-seguro").innerHTML = valor;
  });
  
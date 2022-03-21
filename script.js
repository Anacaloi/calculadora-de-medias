function CalcMedia() {
  var notaPrimeiroBimestre = document.getElementById("PrimeiroBimestre").value;
  var notaSegundoBimestre = document.getElementById("SegundoBimestre").value;
  var notaTerceiroBimestre = document.getElementById("TerceiroBimestre").value;
  var notaQuartoBimestre = document.getElementById("QuartoBimestre").value;

  var notaCalculada =
    (parseInt(notaPrimeiroBimestre) +
      parseInt(notaSegundoBimestre) +
      parseInt(notaTerceiroBimestre) +
      parseInt(notaQuartoBimestre)) /
    4;

  var notaFinal = notaCalculada.toFixed(1);

  document.getElementById("results").innerHTML = notaFinal;
}
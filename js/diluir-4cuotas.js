document.querySelector(".btnDiluir").addEventListener("click", calpriminDiluir);

function calpriminDiluir(){

    let num1, num2, primin, saldo, saldo1, precio, resultado1;
    
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    precio = (parseFloat (num1)).toFixed(2);

    saldo1 = parseFloat(num1) - parseFloat(num2)

    if (num1 == "" || num1 <= "0") {
        
      //alert("Para calcular prima minima ingrese el precio de la motocicleta.....!")
      document.getElementById("numero2").value = "";
      document.getElementById("numero1").value = "";
      document.getElementById("numero1").focus();
        
    } else if (num2 =="") {

        //alert("Ingrese el valor de una prima minima.....!")
        document.getElementById("numero2").focus();

    } else if (num2 < "0") {

        //alert("La prima minima no puede ser menor a cero.....!")
        document.getElementById("numero2").value = "";
        document.getElementById("numero2").focus();

    } else if (saldo1 <= "0") {

        //alert("Su saldo es igual o menor a cero no se puede realizar un plan de pago.....!")
        document.getElementById("numero2").focus();
    
    } else {

        document.querySelector('.titulo-pago').style.display = 'block';
        document.querySelector('.tabla-container').style.display = 'block';
        document.querySelector('.input-grupo2').style.display = 'block';
        document.querySelector('.btnDiluir').style.display = 'block';
        document.querySelector('.btnNvaCot').style.display = 'block';
        

        primin = (parseFloat(num2) + 10).toFixed(2);
        saldo = (parseFloat(num1) - parseFloat(num2)).toFixed(2);

        document.getElementById("lblprima").innerHTML= "Prima minima + papeleo";
        document.getElementById("lbltoprima1").innerHTML= "$" + primin;
        document.getElementById("lblsaldo").innerHTML= "Saldo $" + saldo;
        document.getElementById("lblpreciomo1").innerHTML= "Precio de la motocicleta $" + precio;

        resultado1 = ((saldo1 + 65) / 4).toFixed(2)
        
        document.getElementById("lblCuota_01").innerHTML= "$" + resultado1;
        document.getElementById("lblCuota_02").innerHTML= "$" + resultado1;
        document.getElementById("lblCuota_03").innerHTML= "$" + resultado1;
        document.getElementById("lblCuota_04").innerHTML= "$" + resultado1;

        const bodyElement = document.body;
        bodyElement.style.padding = "1rem";

    }         
}
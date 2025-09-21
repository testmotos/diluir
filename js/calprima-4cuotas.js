document.getElementById("numero1").focus();
document.getElementById("myBtnCalPrima").addEventListener("click", calprima)
document.getElementById("numero1").addEventListener("keydown",teclaEnter01);

function teclaEnter01(e){
    (e.key==="Enter") && calprima()
}

function calprima(){

    let num1, prima, precio, saldo;

    document.getElementById("numero2").focus();
    
    num1 = document.getElementById("numero1").value;
    precio = (parseFloat (num1)).toFixed(2);

    if (num1 =="") {

        //alert("Ingrese precio de la motocicleta para calcular prima.....!")
        document.getElementById("numero1").focus();

    } else if (num1 <= "0") {

        //alert("El precio de la motocicleta debe ser mayor a cero para poder calcular prima.....!")
        document.getElementById("numero1").value = "";
        document.getElementById("numero1").focus();

    } else {

        document.querySelector('.input-grupo2').style.display = 'block';
        document.querySelector('.input-grupo3').style.display = 'flex';
        document.querySelector('.btnDiluir').style.display = 'none';

        prima = (parseFloat(num1) * 0.35).toFixed(2);
        saldo = (parseFloat(num1) - parseFloat(prima)).toFixed(2);
    
        document.getElementById("lblprima").innerHTML= "Prima minima";
        document.getElementById("lbltoprima1").innerHTML= "$" + prima;
        document.getElementById("lblsaldo").innerHTML= "Saldo $" + saldo;
        document.getElementById("lblpreciomo1").innerHTML= "Precio de la motocicleta $" + precio;
        
    }  
}
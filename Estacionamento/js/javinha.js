function calcular() {
    var cliente = document.getElementById("cxnome").value;
    var placa = document.getElementById("cxplaca").value;
    var carro = document.getElementById("cxcarro").value;
    var dias = document.getElementById("cxdias").value;
    var diaria = document.getElementById("cxdiaria").value;

    var bruto = parseFloat(diaria) * parseInt(dias);
    document.getElementById("cxbruto").value = bruto;

    var total;
    if (bruto > 150) {
        total = bruto - (bruto * 0.10);
    } else {
        total = bruto;
    }

    document.getElementById("resultados").innerHTML = 
        "Cliente: " + cliente + "<br>" +
        "Placa: " + placa + "<br>" +
        "Carro: " + carro + "<br>" +
        "Dias: " + dias + "<br>" +
        "Diária: " + diaria + "<br>" +
        "Bruto: " + bruto + "<br>" +
        "Total: " + total;
        

}
function limpar() {
            document.getElementById("cxnome").value = "";
            document.getElementById("cxplaca").value = "";
            document.getElementById("cxcarro").value = "";
            document.getElementById("cxdias").value = "";
            document.getElementById("cxdiaria").value = "";
            document.getElementById("cxbruto").value = "";
            
            document.getElementById("resultados").innerHTML = "";
}
        
function sair() {
            window.close();
}
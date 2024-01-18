function showLuas() {
    document.getElementById("luas").style.display = "block";
    document.getElementById("keliling").style.display = "none";
}

function showKeliling() {
    document.getElementById("keliling").style.display = "block";
    document.getElementById("luas").style.display = "none";
}

function calculateLuas() {
    var sideLuas = parseFloat(document.getElementById("sideLuas").value);
    var resultLuas = document.getElementById("resultLuas");

    if (!isNaN(sideLuas)) {
        var luas = sideLuas * sideLuas;
        resultLuas.innerHTML = luas;
        document.getElementById("result").style.display = "block";
    } else {
        alert("Masukkan panjang sisi yang valid.");
    }
}

function calculateKeliling() {
    var sideKeliling = parseFloat(document.getElementById("sideKeliling").value);
    var resultKeliling = document.getElementById("resultKeliling");

    if (!isNaN(sideKeliling)) {
        var keliling = 4 * sideKeliling;
        resultKeliling.innerHTML = keliling;
        document.getElementById("result").style.display = "block";
    } else {
        alert("Masukkan panjang sisi yang valid.");
    }
}

function resetForm() {
    document.getElementById("sideLuas").value = "";
    document.getElementById("sideKeliling").value = "";
    document.getElementById("resultLuas").innerHTML = "";
    document.getElementById("resultKeliling").innerHTML = "";
}

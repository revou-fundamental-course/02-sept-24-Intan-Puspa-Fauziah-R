//Ini JS

//Ketika ditekan maka ada perubahan warna
function tryDOM (){
    document.getElementById("jajar-genjang-btn").style.backgroundColor = "#FFFFFF";
}

function tryDOM (){
    document.getElementById("segitiga-btn").style.backgroundColor = "#FFFFFF";
}

//Agar Dapat Memilih Form yang Diinginkan


//Agar angka terekam ketika form diisi Luas Segitiga
function validateluas () {
    let panjangAlas = document.getElementById("panjang-alas").value;
    let tinggi = document.getElementById("tinggi").value;

    if (panjangAlas == "" || tinggi == ""){
        alert("Terdapat Form yang Kosong");
    }
    
    //Kalkulasi Hasil Luas Segitiga
    const hasil = 0.5 * panjangAlas * tinggi
    document.getElementById("result-luas").textContent = "Hasil Perhitungan:" + hasil;
 
    console.log(panjangAlas);
    console.log(tinggi);
}

//Agar angka terekam ketika form diisi Keliling Segitiga
function validatekeliling () {
    let sisiKe1 = parseFloat(document.getElementById("sisi-ke-1").value);
    let sisiKe2 = parseFloat(document.getElementById("sisi-ke-2").value);
    let sisiKe3 = parseFloat(document.getElementById("sisi-ke-3").value);

    if (sisiKe1 == "" || sisiKe2 == "" || sisiKe3 == ""){
        alert("Terdapat Form yang Kosong");
    }

    //Kalkulasi Hasil Keliling Segitiga
    const hasil = sisiKe1 + sisiKe2 + sisiKe3
    document.getElementById("result-keliling").textContent = "Hasil Perhitungan: " + hasil;
    
    console.log(sisiKe1);
    console.log(sisiKe2);
    console.log(sisiKe3);
    console.log("Keliling Segitiga:", hasilKeliling)
}

//Agar angka terekam ketika form diisi Luas Jajar Genjang
function validateluasjg () {
    let panjangAlasJg = document.getElementById("panjang-alas-jg").value;
    let tinggiJg = document.getElementById("tinggi-jg").value;

    if (panjangAlasJg == "" || tinggiJg == ""){
        alert("Terdapat Form yang Kosong");
    }
    
    //Kalkulasi Hasil Luas Jajar Genjang
    const hasil = panjangAlasJg * tinggiJg
    document.getElementById("result-luas-jajar-genjang").textContent = "Hasil Perhitungan:" + hasil;
 
    console.log(panjangAlasJg);
    console.log(tinggiJg);
}

//Agar angka terekam ketika form diisi Keliling Jajar Genjang
function validatekelilingjg () {
    let panjangAlasKJg = parseFloat(document.getElementById("panjang-alas-k-jg").value);
    let sisiMiring = parseFloat(document.getElementById("sisi-miring").value);

    if (panjangAlasKJg == "" || sisiMiring == ""){
        alert("Terdapat Form yang Kosong");
    }

    //Kalkulasi Hasil Keliling Jajar Genjang
    const hasil = (2*panjangAlasKJg) + (2*sisiMiring)
    document.getElementById("result-keliling-jg").textContent = "Hasil Perhitungan:" + hasil;
    
    console.log(panjangAlasKJg);
    console.log(sisiMiring);
    console.log("Keliling Jajar Genjang:", hasilKelilingJg)
}
// loop tampilkan text user
for ( let i = 1 ; i <= 100 ; i++) {
    let user = "user ke" + i
    console.log(user)
}

// for loop penambahan 10 kali nilai awal ditambah 2
for ( let i = 0 ; i <= 20 ; i+=2 ) {
    console.log(i)
}

// iterasi 0 ke 20
for ( let i = 0 ; i <= 20 ; i++) {
    if (i % 2 == 0) {
        console.log(i + "genap")
    } else { console.log(i + "ganjil")}
}

// tampilkan konfirmasi pop up
let i = confirm("apakah anda mau mengulang ?")
do {
    confirm("apakah anda mau mengulang ?")
} while (i != "Oke") {
    confirm("apakah anda mau mengulang ?")
}


// buat program kuis
let i = prompt("sebutkan kepanjangan dari nama IB !")
do {
    i = prompt("isi")
} while (i != "Impact Byte") {
alert("sukses")
}
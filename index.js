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
while (i == "ok") {
    console.log(i)
    i++
} while (i == "cancel") {
    console.log("perulangan sebanyak" + i)
}

// buat program kuis

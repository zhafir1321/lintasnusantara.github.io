function jenisPaket(nama) {
    let harga = 0
    switch (nama) {
        case "barang":
            harga = 5_000
            break;
        case "makanan":
            harga = 7_000
            break;
        case "barang pecah belah":
            harga = 10_000
            break;
        case "elektronik":
            harga = 12_000
            break;
    }
    return harga
}
//output = 5000

function beratPaket(beratPackage) {
    let harga = 0
    if (beratPackage < 1) {
        harga = 10_000
        return harga
    } else if (beratPackage >= 1 && beratPackage <= 5) {
        harga = 25_000
        return harga
    } else if (beratPackage >= 6 && beratPackage <= 10) {
        harga = 35_000
        return harga
    } else if (beratPackage >= 10 && beratPackage < 20) {
        harga = 75_000
        return harga
    } else if (beratPackage >= 20) {
        let temp = Math.ceil((beratPackage - 20) / 5)
        harga = 150_000 + temp
        return harga
    }
}
//output = 10000

function tujuanPaket(tujuan) {
    let arr = []
    let harga = 0
    let str = ""
    const today = new Date();
    const waktu = new Date(today);
    switch (tujuan) {
        case "aceh":
            harga = 200_000
            waktu.setDate(today.getDate() + 8);
            const threeDD = String(waktu.getDate()).padStart(2, '0');
            const threeMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const threeYY = String(waktu.getFullYear()).slice(-2);
            const threeFormatted = `${threeDD}-${threeMM}-${threeYY}`;
            arr.push(harga, threeFormatted)
            break;
        case "medan":
            harga = 190_000
            waktu.setDate(today.getDate() + 7);
            const sevenDD = String(waktu.getDate()).padStart(2, '0');
            const sevenMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const sevenYY = String(waktu.getFullYear()).slice(-2);
            const sevenFormatted = `${sevenDD}-${sevenMMMM}-${sevenYYYY}`;
            arr.push(harga, sevenFormatted)
            break;
        case "padang":
            harga = 175_000
            waktu.setDate(today.getDate() + 6);
            const sixDD = String(waktu.getDate()).padStart(2, '0');
            const sixMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const sixYY = String(waktu.getFullYear()).slice(-2);
            const sixFormatted = `${sixDD}-${sixMM}-${sixYY}`;
            arr.push(harga, sixFormatted)
            break;
        case "lampung":
            harga = 80_000
            waktu.setDate(today.getDate() + 4);
            const fourDD = String(waktu.getDate()).padStart(2, '0');
            const fourMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const fourYY = String(waktu.getFullYear()).slice(-2);
            const fourFormatted = `${fourDD}-${fourMM}-${fourYY}`;
            arr.push(harga, fourFormatted)
            break;
        case "samarinda":
            harga = 180_000
            waktu = "8 hari"
            waktu.setDate(today.getDate() + 8);
            const eightDD = String(waktu.getDate()).padStart(2, '0');
            const eightMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const eightYY = String(waktu.getFullYear()).slice(-2);
            const eightFormatted = `${eightDD}-${eightMM}-${eightYY}`;
            arr.push(harga, eightFormatted)
            break;
        case "jakarta":
            harga = 25_000
            waktu.setDate(today.getDate() + 1);
            const oneDD = String(waktu.getDate()).padStart(2, '0');
            const oneMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const oneYY = String(waktu.getFullYear()).slice(-2);
            const oneFormatted = `${oneDD}-${oneMM}-${oneYY}`;
            arr.push(harga, oneFormatted)
            break;
        case "bandung":
            harga = 50_000
            waktu.setDate(today.getDate() + 2);
            const twoDD = String(waktu.getDate()).padStart(2, '0');
            const twoMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const twoYY = String(waktu.getFullYear()).slice(-2);
            const twoFormatted = `${twoDD}-${twoMM}-${twoYY}`;
            arr.push(harga, twoFormatted)
            break;
        case "jogja":
            harga = 100_000
            waktu.setDate(today.getDate() + 4);
            const empatDD = String(waktu.getDate()).padStart(2, '0');
            const empatMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const empatYY = String(waktu.getFullYear()).slice(-2);
            const empatFormatted = `${empatDD}-${empatMM}-${empatYY}`;
            arr.push(harga, empatFormatted)
            break;
        case "manado":
            harga = 230_000
            waktu.setDate(today.getDate() + 10);
            const tenDD = String(waktu.getDate()).padStart(2, '0');
            const tenMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const tenYY = String(waktu.getFullYear()).slice(-2);
            const tenFormatted = `${tenDD}-${tenMM}-${tenYY}`;
            arr.push(harga, tenFormatted)
            break;
        case "jayapura":
            harga = 210_000
            waktu.setDate(today.getDate() + 9);
            const nineDD = String(waktu.getDate()).padStart(2, '0');
            const nineMM = String(waktu.getMonth() + 1).padStart(2, '0');
            const nineYY = String(waktu.getFullYear()).slice(-2);
            const nineFormatted = `${nineDD}-${nineMM}-${nineYY}`;
            arr.push(harga, nineFormatted)
            break;
    }
    return arr
}
//output = [ 50000, '2 hari']

function paket(nama, beratPackage, tujuan) {
    let name = jenisPaket(nama)
    let kg = beratPaket(beratPackage)
    let destination = tujuanPaket(tujuan)
    let newPrice = name + kg + destination[0]
    let result = {
        namaBarang: nama,
        berat: beratPackage,
        tujuan: tujuan,
        jenisPengirim: "Standard",
        estimasi: destination[1],
        harga: newPrice,
        status: "Sedang dalam proses"
    }
    return result
}
//output = [ 75000, 2 hari ]

const namaPaket = "barang"
const berat = 0.8
const tujuan = "aceh"

console.log(paket(namaPaket, berat, tujuan));

// output [ 75000, 2 hari ]


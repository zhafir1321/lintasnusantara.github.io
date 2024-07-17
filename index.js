function jenisPaket(nama) {
  let harga = 0;
  switch (nama) {
    case "barang":
      harga = 5_000;
      break;
    case "makanan":
      harga = 7_000;
      break;
    case "barang pecah belah":
      harga = 10_000;
      break;
    case "elektronik":
      harga = 12_000;
      break;
  }
  return harga;
}
//output = 5000

function beratPaket(beratPackage) {
  let harga = 0;
  let hargaTambahan = 50_000;
  if (beratPackage < 1) {
    harga = 10_000;
    return harga;
  } else if (beratPackage >= 1 && beratPackage <= 5) {
    harga = 25_000;
    return harga;
  } else if (beratPackage >= 6 && beratPackage <= 10) {
    harga = 35_000;
    return harga;
  } else if (beratPackage >= 10 && beratPackage < 20) {
    harga = 75_000;
    return harga;
  } else if (beratPackage >= 20) {
    let temp = Math.ceil((beratPackage - 20) / 5) * hargaTambahan; 
    harga = 150_000 + temp;
    return harga;
  }
}
//output = 10000

function tujuanPaket(tujuan) {
  let arr = [];
  let harga = 0;
  let str = "";
  const today = new Date();
  const waktu = new Date(today);
  switch (tujuan) {
    case "aceh":
      harga = 200_000;
      waktu.setDate(today.getDate() + 8);
      const threeDD = String(waktu.getDate()).padStart(2, "0");
      const threeMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const threeYY = String(waktu.getFullYear()).slice(-2);
      const threeFormatted = `${threeDD}-${threeMM}-${threeYY}`;
      arr.push(harga, threeFormatted);
      break;
    case "medan":
      harga = 190_000;
      waktu.setDate(today.getDate() + 7);
      const sevenDD = String(waktu.getDate()).padStart(2, "0");
      const sevenMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const sevenYY = String(waktu.getFullYear()).slice(-2);
      const sevenFormatted = `${sevenDD}-${sevenMM}-${sevenYY}`;
      arr.push(harga, sevenFormatted);
      break;
    case "padang":
      harga = 175_000;
      waktu.setDate(today.getDate() + 6);
      const sixDD = String(waktu.getDate()).padStart(2, "0");
      const sixMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const sixYY = String(waktu.getFullYear()).slice(-2);
      const sixFormatted = `${sixDD}-${sixMM}-${sixYY}`;
      arr.push(harga, sixFormatted);
      break;
    case "lampung":
      harga = 80_000;
      waktu.setDate(today.getDate() + 4);
      const fourDD = String(waktu.getDate()).padStart(2, "0");
      const fourMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const fourYY = String(waktu.getFullYear()).slice(-2);
      const fourFormatted = `${fourDD}-${fourMM}-${fourYY}`;
      arr.push(harga, fourFormatted);
      break;
    case "samarinda":
      harga = 180_000;
      waktu = "8 hari";
      waktu.setDate(today.getDate() + 8);
      const eightDD = String(waktu.getDate()).padStart(2, "0");
      const eightMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const eightYY = String(waktu.getFullYear()).slice(-2);
      const eightFormatted = `${eightDD}-${eightMM}-${eightYY}`;
      arr.push(harga, eightFormatted);
      break;
    case "jakarta":
      harga = 25_000;
      waktu.setDate(today.getDate() + 1);
      const oneDD = String(waktu.getDate()).padStart(2, "0");
      const oneMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const oneYY = String(waktu.getFullYear()).slice(-2);
      const oneFormatted = `${oneDD}-${oneMM}-${oneYY}`;
      arr.push(harga, oneFormatted);
      break;
    case "bandung":
      harga = 50_000;
      waktu.setDate(today.getDate() + 2);
      const twoDD = String(waktu.getDate()).padStart(2, "0");
      const twoMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const twoYY = String(waktu.getFullYear()).slice(-2);
      const twoFormatted = `${twoDD}-${twoMM}-${twoYY}`;
      arr.push(harga, twoFormatted);
      break;
    case "jogja":
      harga = 100_000;
      waktu.setDate(today.getDate() + 4);
      const empatDD = String(waktu.getDate()).padStart(2, "0");
      const empatMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const empatYY = String(waktu.getFullYear()).slice(-2);
      const empatFormatted = `${empatDD}-${empatMM}-${empatYY}`;
      arr.push(harga, empatFormatted);
      break;
    case "manado":
      harga = 230_000;
      waktu.setDate(today.getDate() + 10);
      const tenDD = String(waktu.getDate()).padStart(2, "0");
      const tenMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const tenYY = String(waktu.getFullYear()).slice(-2);
      const tenFormatted = `${tenDD}-${tenMM}-${tenYY}`;
      arr.push(harga, tenFormatted);
      break;
    case "jayapura":
      harga = 210_000;
      waktu.setDate(today.getDate() + 9);
      const nineDD = String(waktu.getDate()).padStart(2, "0");
      const nineMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const nineYY = String(waktu.getFullYear()).slice(-2);
      const nineFormatted = `${nineDD}-${nineMM}-${nineYY}`;
      arr.push(harga, nineFormatted);
      break;
  }
  return arr;
}
//output = [ 50000, '2 hari']
let paket = function (nama, beratPackage, tujuan, category) {
  let name = jenisPaket(nama);
  let pricePerKg = beratPaket(beratPackage);
  let destination = tujuanPaket(tujuan);
  let newPrice = name + pricePerKg + destination[0];
  let result = {
    namaBarang: nama,
    berat: beratPackage,
    tujuan: tujuan,
    jenisPengirim: category,
    estimasi: destination[1],
    harga: newPrice,
    status: "Sedang dalam proses",
  };

  return result;
}


function getData(arr) {
  let data = JSON.parse(arr)
  let result = {}
  console.log(data);
  for(let i = 0; i < data.length; i++){
    result = {
      namaBarang: data[i].namaBarang,
      berat: data[i].berat,
      tujuan: data[i].tujuan,
      jenisPengirim: data[i].jenisPengirim,
      estimasi: data[i].estimasi,
      harga: data[i].harga,
      status: data[i].status
    }
  }
  return result
}

function addNewRowToTable(data, id) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const newRow = document.createElement('tr');
  newRow.classList.add('tbody');
  newRow.setAttribute('data-id', id);

  const cell1 = document.createElement('td');
  cell1.classList.add('text-center', 'border');
  cell1.textContent = document.querySelectorAll('#dataTable tr').length;

  const cell2 = document.createElement('td');
  cell2.classList.add('text-center', 'border');
  cell2.textContent = data.namaBarang;

  const cell3 = document.createElement("td");
  cell3.classList.add("text-center", "border", "text-white");
  cell3.textContent = data.berat + "kg";

  const cell4 = document.createElement("td");
  cell4.classList.add("text-center", "border", "text-white");
  cell4.textContent = data.tujuan;

  const cell5 = document.createElement("td");
  cell5.classList.add("text-center", "border", "text-white");
  cell5.textContent = data.jenisPengirim;

  const cell6 = document.createElement("td");
  cell6.classList.add("text-center", "border", "text-white");
  cell6.textContent = data.estimasi;

  const cell7 = document.createElement('td');
  cell7.classList.add('text-center', 'border');
  cell7.textContent = formatRupiah(data.harga);

  const cell8 = document.createElement('td');
  cell8.classList.add('text-center', 'border');
  cell8.textContent = 'Sedang diproses';

  const cell9 = document.createElement('td');
  cell9.classList.add('text-center', 'border');
  const div = document.createElement('div');
  div.classList.add('flex', 'px-1', 'w-full');

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.onclick = function () {
    deleteData(id); // Pass the unique identifier
  };
  const deleteImg = document.createElement('img');
  deleteImg.src = './img/hapus.png';
  deleteImg.width = 20;
  deleteImg.height = 20;
  deleteButton.appendChild(deleteImg);

  div.appendChild(deleteButton);
  cell9.appendChild(div);

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);
  newRow.appendChild(cell5);
  newRow.appendChild(cell6);
  newRow.appendChild(cell7);
  newRow.appendChild(cell8);
  newRow.appendChild(cell9);


  document.getElementById('dataTable').appendChild(newRow);
}

let arr = [];


document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const berat = document.getElementById('berat').value;
  const category = document.getElementById('category').value;
  const shipment = document.getElementById('shipment').value;

  const newData = paket(name, berat, shipment, category);
  const uniqueId = 'paket-' + new Date().getTime();

  localStorage.setItem(uniqueId, JSON.stringify(newData));
  addNewRowToTable(newData, uniqueId);
});

window.onload = function() {
  let storedData = JSON.parse(localStorage.getItem('paket')) || [];
  storedData.forEach(data => addNewRowToTable(data));
};

function deleteData(id) {
  // Remove the row from the table
  const row = document.querySelector(`tr[data-id="${id}"]`);
  if (row) {
    row.parentNode.removeChild(row);
  }

  // Remove the item from localStorage
  localStorage.removeItem(id);
  window.location.reload()
}

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('paket-')) {
      const data = JSON.parse(localStorage.getItem(key));
      addNewRowToTable(data, key);
    }
  }
});

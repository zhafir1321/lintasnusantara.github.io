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

function paket(nama, beratPackage, tujuan, category) {
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


function jenisPaket(nama) {
  let harga = 0;
  switch (nama) {
    case "Pakaian":
      harga = 5_000;
      break;
    case "Makanan":
      harga = 7_000;
      break;
    case "Kaca":
      harga = 10_000;
      break;
    case "Elektronik":
      harga = 12_000;
      break;
  }
  return harga;
}

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

function tujuanPaket(tujuan) {
  let arr = [];
  let harga = 0;
  const today = new Date();
  const waktu = new Date(today);
  const yyyy = today.getFullYear()
  switch (tujuan) {
    case "Aceh":
      harga = 200_000;
      waktu.setDate(today.getDate() + 8);
      const threeDD = String(waktu.getDate()).padStart(2, "0");
      const threeMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const threeFormatted = `${threeDD}-${threeMM}-${yyyy}`;
      arr.push(harga, threeFormatted);
      break;
    case "Medan":
      harga = 190_000;
      waktu.setDate(today.getDate() + 7);
      const sevenDD = String(waktu.getDate()).padStart(2, "0");
      const sevenMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const sevenFormatted = `${sevenDD}-${sevenMM}-${yyyy}`;
      arr.push(harga, sevenFormatted);
      break;
    case "Padang":
      harga = 175_000;
      waktu.setDate(today.getDate() + 6);
      const sixDD = String(waktu.getDate()).padStart(2, "0");
      const sixMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const sixFormatted = `${sixDD}-${sixMM}-${yyyy}`;
      arr.push(harga, sixFormatted);
      break;
    case "Lampung":
      harga = 80_000;
      waktu.setDate(today.getDate() + 4);
      const fourDD = String(waktu.getDate()).padStart(2, "0");
      const fourMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const fourFormatted = `${fourDD}-${fourMM}-${yyyy}`;
      arr.push(harga, fourFormatted);
      break;
    case "Samarinda":
      harga = 180_000;
      waktu = "8 hari";
      waktu.setDate(today.getDate() + 8);
      const eightDD = String(waktu.getDate()).padStart(2, "0");
      const eightMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const eightFormatted = `${eightDD}-${eightMM}-${yyyy}`;
      arr.push(harga, eightFormatted);
      break;
    case "Jakarta":
      harga = 25_000;
      waktu.setDate(today.getDate() + 1);
      const oneDD = String(waktu.getDate()).padStart(2, "0");
      const oneMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const oneFormatted = `${oneDD}-${oneMM}-${yyyy}`;
      arr.push(harga, oneFormatted);
      break;
    case "Bandung":
      harga = 50_000;
      waktu.setDate(today.getDate() + 2);
      const twoDD = String(waktu.getDate()).padStart(2, "0");
      const twoMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const twoFormatted = `${twoDD}-${twoMM}-${yyyy}`;
      arr.push(harga, twoFormatted);
      break;
    case "Jogja":
      harga = 100_000;
      waktu.setDate(today.getDate() + 4);
      const empatDD = String(waktu.getDate()).padStart(2, "0");
      const empatMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const empatFormatted = `${empatDD}-${empatMM}-${yyyy}`;
      arr.push(harga, empatFormatted);
      break;
    case "Manado":
      harga = 230_000;
      waktu.setDate(today.getDate() + 10);
      const tenDD = String(waktu.getDate()).padStart(2, "0");
      const tenMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const tenFormatted = `${tenDD}-${tenMM}-${yyyy}`;
      arr.push(harga, tenFormatted);
      break;
    case "Jayapura":
      harga = 210_000;
      waktu.setDate(today.getDate() + 9);
      const nineDD = String(waktu.getDate()).padStart(2, "0");
      const nineMM = String(waktu.getMonth() + 1).padStart(2, "0");
      const nineFormatted = `${nineDD}-${nineMM}-${yyyy}`;
      arr.push(harga, nineFormatted);
      break;
  }
  return arr;
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
  if(data.namaBarang === "Makanan") {
    cell2.textContent = "Makanan"
  } else if(data.namaBarang === "Pakaian") {
    cell2.textContent = "Pakaian/ Kain"
  } else if(data.namaBarang === "Kaca") {
    cell2.textContent = "Barang Pecah Belah"
  } else if(data.namaBarang === "Elektronik"){
    cell2.textContent = "Elektronik"
  }

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
    deleteData(id);
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

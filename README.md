# Tugas pekan 2 
## _Botcamp Sanbercode - QA Automation_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Pada tugas pekan 2 ini terdapat 2 soal dimana terdapat sebuah kasus yang harus dipenuhi proses validasinya yang harus dibuat menggunakan 2 file js. Dimana dalam penyelesaiannya menggunakan package tambahan dari npm yaitu prompt-sync yang berfungsi guna menyelesaikan perhitungan secara matematika

## Instalasi

1.  Pastikan Anda telah menginstal Node.js di komputer Anda.
2.  Clone repositori ini ke lokal Anda.
3.  Buka terminal dan navigasikan ke direktori repositori.
4.  Jalankan perintah npm install untuk menginstal dependensi.

## Penggunaan 

### Soal 1 : Akar Pangkat Dua 
Program ini menghitung akar pangkat 2 dari sebuah bilangan genap.
```javascript
function akarPangkatDua(x) {
    // Validasi input
    if (x < 0) {
        throw new Error("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        throw new Error("Tidak bisa input bilangan ganjil");
    }
    // Hitung akar pangkat 2
    return Math.sqrt(x);
}

// Contoh penggunaan
try {
    // input data angka dari pengguna
    const x = prompt('Enter a first number: ');
    const result = akarPangkatDua(x);
    console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
} catch (error) {
    console.error(error.message);
}

```

### Soal 2
Program ini menghitung total quantity dari beberapa storageId untuk productCode tertentu.

```javascript
// Data init sesuai soal productBin
let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  // Function untuk menghitung total quantity berdasarkan storageId untuk productCode tertentu
  function calculateTotalQuantity(productBin, productCode) {
    let totalQuantity = 0;
  
    // Iterasi setiap data produk yang akan dihitung
    productBin.data.forEach(item => {
      // kondisi productCode dimana sama dengan yang sedang dicari
      if (item.productCode === productCode) {
        // Tambahkan value quantity ke variabel totalQuantity
        totalQuantity += item.quantity;
      }
    });
  
    return totalQuantity;
  }
  
  // Product code yang ingin dihitung total quantity-nya dengan productCode pada soal
  const productCode = "FBR00040101";
  
  // membuat varibel totalQuantity yang memiliki value dari fungsi Hitung total quantity untuk productCode yang sama
  const totalQuantity = calculateTotalQuantity(productBin, productCode);
  
  // print hasil pada console
  console.log(`Total quantity untuk productCode ${productCode} adalah ${totalQuantity}`);
  
```

## License

MIT

**Always Free All the Time!**

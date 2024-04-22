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
  
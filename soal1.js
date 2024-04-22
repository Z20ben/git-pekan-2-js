const prompt = require('prompt-sync')({ sigint: true });

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
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nama mahasiswa? ", (nama) => {
  rl.question("Nilai (pisah koma, e.g. 80,90,70)? ", (input) => {
    const nilaiArray = input.split(",").map(num => parseFloat(num));

    const hitungRataRata = (arr) => {
      const total = arr.reduce((acc, curr) => acc + curr, 0);
      return total / arr.length;
    };

    const rataRata = hitungRataRata(nilaiArray);

    console.log(`${nama} - Rata-rata: ${rataRata.toFixed(2)}`);
    console.log(`Nilai: [${nilaiArray.join(", ")}]`);

    const status = rataRata >= 70 ? "Lulus 🎉" : "Belajar lagi!";
    console.log(`Status: ${status}`);

    console.table([{ name: nama, avg: rataRata.toFixed(2) }]);

    rl.close();
  });
});

/*
  Untuk mendapatkan panjang array atau jumlah item di dalam array dapat menggunakan:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
  data_array.length

  Cobalah untuk menghitung jumlah item array tanpa menggunakan .length

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - menggunakan infinity looping, mulai dari 0 sampai tak hingga
  - di setiap looping cek apakah ada data pada array di index tersebut?
      - jika ada, count++
      - jika tidak ada, stop looping menggunakan break
*/
 
//fungsi count didefinisikan dengan parameter(arr) yang mewakili array
const countManual = (arr) => {
  //deklarasi variabel count dengan nilai 0 untuk menghitung jumlah elemen array
  let count = 0;
  /*menggunakan looping while yang berjalan tanpa henti akan memeriksa setiap elemen dalam array
  menggunakan pernyataan kondisi if
  */
  for (let i = 0; i >= 0; i++) {
    //jika elemen pada index count tidak terdefinisi(undefined) maka loop dihentikan dengan brak
    if (arr[i] === undefined) {
      //jika elemen count dalam array terdefinisi, maka variabel count akan ditingkatkan
       break;
    }
     count++;
  }
  //setelah looping selesai, fungsi mengembalikan nilai count, yang merupakan jumlah item dalam array
  return count;
}

// let i = 0;
// let count = 0;
// const countManual1 = (arr1) => {
// let continueLooping = true;
// while (continueLooping) {
//   if (arr1[i] === undefined) {
//     continueLooping = false;
//   }
//   else{
//     count++;
//     i++
//  }
// }
// return count;
// }
let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
//fungsi countManual dipanggil dengan data_array yang telah didefinisikan
console.log(countManual(data_array)); // output : 21
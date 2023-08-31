/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - lakukan looping untuk setiap item array
  - disetiap looping cek apakah item tersebut sama dengan "value yang dicari"
      - jika sama, count++
*/

//fungsi countdata didefinisikan dengan menerima 2 parameter 
const countData = (arr, searchValue) => {
  //variabel count dideklarasikan dengan nilai awal 0 untuk menghitung berapa kali searchvalue muncul array
  let count = 0;
  //loop for digunakan untuk mengiterasi melalui setiap elemen array
  for (let i = 0; i < arr.length; i++) {
  //pada setiap iterasi memeriksa indeks 'i' darri array sama dengan searchvalue
    if (arr[i] === searchValue) {
    //jika sama maka count ditingkatkan
      count++;
    }
  }
  //return hasilnya
  return count;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
//fungsi countData dipanggil dengan data_array yang telah didefinisikan, dan angka 5 sebagai yang dicari
console.log(countData(data_array, 5));  // output: 6

// let result2 = countData([1,2,3,4,5,5,5,5,5,6],5);
// console.log(result2);
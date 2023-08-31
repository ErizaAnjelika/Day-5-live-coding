/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

//fungsi countdata didefinisikan dengan menerima 2 parameter
const filterData = (arr, searchValue) => {
  /*variabel result dideklarasikan dengan array kosong digunakan untuk menyimpan angka yang sesuai
  dengan searchValue*/
  let result = [];
  //for digunakan untuk mengiterasi setiap elemen yang ada pada array
  for (let i = 0; i < arr.length; i++) {
  //pada setiap iterasi program memerikas apakah nilai pada indek i sama dengan searchValue.
    //if (arr[i] === searchValue) {
      if (searchValue.includes(arr[i])){ //arr[i] = tiap item array
    //jika hasil ierasi iya maka akan ditambahkan ke array result menggunakan method 'push'
    //metode 'push' digunakan untuk menambahkan elemen baru ke dalam array.  
      result.push(arr[i])
    }
  }
  //setelah looping selesai fungsi filterData mengembalikan array result yang berisikan angka sesuai searchValue
  return result;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
//fungsi countData dipanggil dengan data_array yang telah didefinisikan, dan angka 5 sebagai yang dicari
console.log(filterData(data_array,[2,5,9]));  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)

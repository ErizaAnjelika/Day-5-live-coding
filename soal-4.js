/**
 * Filter Array
 * 
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data yang memiliki grade diatas 7
 * 
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

students = [
  {name:"Andi",grade:7.5},
  {name:"Ardi",grade:9},
  {name:"Ahmad",grade:7},
  {name:"Anang",grade:6},
  {name:"Amir",grade:8}
];

console.log(students[0]);
/*

expected output:

[
  { name: 'Andi', grade: 7.5 },
  { name: 'Ardi', grade: 9 },
  { name: 'Amir', grade: 8 }
]

*/

//fungsi filtergrade7 menerima parameter datastudent
const filterGrade7 = (dataStudent) => {
  //result dideklarasikan sebagai variabel kosong untuk menyimpan nilai yang memenuhi kriteria
  let result = [];
  //loopping for digunakan untuk mengiterasi setiap elemen dataStudent
  for (let i = 0; i < dataStudent.length; i++) {
    //setiap iterasi memeriksa apakah nilai grade pada objek tersebut lebih besar dari 7 
    if (dataStudent[i].grade > 7) {
    // jika hasil iterasi iya, maka data siswa ditambahkan ke dalam result dengan method push
      result.push(dataStudent[i]);
    }
    
  }
  //setelah looping selesai filtergrade mengembalikan nilai result yang berisi dara siswa
  return result;
};

//fugsi filtergrade dipanggil dengan array object student
let filteredStudents = filterGrade7(students);
console.log(filteredStudents);
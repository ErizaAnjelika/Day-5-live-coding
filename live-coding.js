//array kumpulan data
//array bisa diapain aja?
/**
 * -di search
 * -bisa ditambahkan
 * -bisa juga dihapus
 * -bisa diambil perdata-nya
 */
//  let array =[111,222,333];//index = posisi item, dimulai dari 0

//  console.log(array.includes(222));
//  console.log(array[2]);
//  console.log(array.length);

 //string
 let string = "Halo ini teks";
 console.log(string[0]);
 console.log(string.includes("halo"));
 /**NOTE string
  * -huruf kapital berpengaruh 
  */
let hurufKecil = string.toLocaleLowerCase();
console.log(hurufKecil);
console.log(hurufKecil.includes("halo"));

//object
/**
 * object = sesuatu yang mempunyai properti(atribut) & method
 */

let object = {
    properti1 :"value1",
    properti2 :"value2",
    properti3 :"value3",
    inifunction : function(){
        return "hai";
    }
}

const luasSegitiga = (alas, tinggi) =>{
    return alas * tinggi /2;
}
console.log(object.properti2);//cara akses properti 1
console.log(object["properti2"]);//cara akses properti 2
console.log(object.inifunction());//memanggil method


//looping
let array=[1,3,6,7,8,9,0];

//fungsi = looping angka dari berapa? dan dilakukan sampai kpn
for (let i = 0; i < array.length; i++) {
    let ganjilGenap = array[i] % 2 === 0 ? "genap":"ganjil";
    console.log(`Angka ${array[i]} adalah bilangan ${ganjilGenap}`);
}

let i = 0;
i = i + 1;
i = 1 + 1;

const pi = 3.14;
let pi1 = pi + 1;
console.log(pi1);
//function
/**
 * function = untuk melakukan seatu proses
 * function bisa "menghasilkan sesuatu" => Return value
 * function bisa punya "parameter" => sesuatu yang dibutuhkan untuk diproses
 */

function luasSegitiga2(alas, tinggi) {
    return alas * tinggi / 2;
}

let result =luasSegitiga2(10,10);
console.log(result);







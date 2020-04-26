var tanya=true;
while (tanya) {
    
// menangkap pilihan player
var p = prompt('pilih: gajah, semut, orang');
// menangkap pilihan computer

//membangkitkan bilangan random
var comp = Math.random();

if (comp<0.34) {
    comp='gajah';
}else if (comp>=0.34 && comp<0.67) {
    comp='orang';
}else{
    comp='semut';
}
// console.log(comp);

var hasil='';
// menentukan rules
if (p==comp) {
    hasil = 'SERI';
}else if (p=='gajah') {
    // if (comp==orang) {
    //     hasil='menang';
    // }else{
    //     hasil='kalah';
    // }
    hasil = (comp=='orang') ? 'MENANG' : 'KALAH'; //sama aja
}else if(p=='orang'){
    // if (comp==gajah) {
    //     hasil='kalah';
    // }else{
    //     hasil='menang';
    // }
    hasil = (comp=='gajah') ? 'KALAH' : 'MENANG'; // sama aja
}else if (p=='semut') {
    hasil = (comp=='orang') ? 'KALAH' : 'MENANG';
}else{
    hasil = 'Anda memasukkan pilihan yang salah!'
}


// display
alert('Kamu memilih :' +p+' dan komputer memilih :'+comp+ ' \nMaka kamu '+hasil);

    tanya = confirm('main lagi?');

}
alert('terimakasih sudah bermain');
let math = prompt("Nhập vào điểm môn toán");
let lith = prompt("Nhập vào điểm môn Văn");
let eng = prompt("Nhập vào điểm môn anh");

let avg = (math + lith + eng) /3;

switch(avg)
{
    case avg >= 8.0 && avg <= 10 : alert("Xếp loại Giỏi");
    case avg >= 6.5 && avg <= 7.9 : alert("Xếp loại Khá");
    case avg >= 5.0 && avg <= 6.4 : alert("Xếp Loại Trung Bình");
    case avg < 5.0 : alert("Xếp loại yếu");
    default: alert("Vui lòng nhập lại điểm")
}
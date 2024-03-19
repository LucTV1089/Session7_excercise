let height = prompt("Nhập vào chiều cao của bạn (cm) : ");
let weight = prompt("Nhập vào kg của bạn(kg) : ");

let bmi;
bmi = weight / (height * height);

switch (bmi) {
    case bmi < 18,5: alert("Cân nặng thấp (gầy) "); break;
    case bmi > 18,5 && bmi <= 24,9: alert(" Bình thường "); break;
    case bmi >=25: alert(" Thừa cân "); break;

    case bmi >25 && bmi<=29,9: alert("Tiền béo phì "); break;
    case bmi >30 && bmi<=34,9: alert("Béo phì độ I "); break;
    case bmi >35 && bmi<=39,9: alert("Béo phì độ II "); break;
    case bmi >=40 : alert("Béo phì độ III "); break;
}
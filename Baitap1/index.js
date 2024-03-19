let age = prompt("Bạn sinh năm bao nhiêu  :");
if(age >= 1000 || age <= 2024)
{
    age =  2024 - age;
    alert(age);
}
else{
    console.log("Vui lòng nhập lại");
}
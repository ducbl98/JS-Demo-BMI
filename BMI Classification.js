let height = parseFloat(prompt("Nhập chiều cao của bạn (m) :"))
let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg):"))
BMI = weight/(height*height);
document.getElementById("bmi").innerHTML = BMI;
if(BMI<=18.5){
    alert("Bạn đang gầy");
}else {
    if (BMI<=24.9){
        alert("Bạn bình thường");
    }else {
        if (BMI<=29.9){
            alert("Bạn hơi béo");
        }else {
            if(BMI<=34.9){
                alert("Bạn bị béo phì cấp 1 ");
            }else {
                if(BMI<=39.9) {
                    alert("Bạn bị béo phì cấp 2 ");
                }else{
                    alert("Bạn bị béo phì cấp 3 ");
                }
            }
        }
    }
}

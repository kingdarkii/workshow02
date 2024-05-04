var x1,x2,xSC;
x1=0;
x2=0;
xSC=0;

function checkAnswer01(answer) {
    const result = document.getElementById('result01');
    if (answer === 'a') {
        x1=1;
        result.textContent = "ถูกต้อง วิทยาลัยของเราอยู่ในตัวเมืองจังหวัดชัยภูมิ";
        result.style.color = 'green';
    } else {
        x1=0;
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    xSC=x1+x2;
    document.getElementById('show').innerHTML="คะแนนที่ได้ "+xSC+" คะแนน";
}

function checkAnswer02(answer) {
    const result = document.getElementById('result02');
    if (answer === 'b') {
        x2=1;
        result.textContent = "ถูกต้อง C-BAC ย่อมาจากคำว่า Chaiyaphum Business Administration College";
        result.style.color = 'green';
    } else {
        x2=0;
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    xSC=x1+x2;
    document.getElementById('show').innerHTML="คะแนนที่ได้ "+xSC+" คะแนน";
}
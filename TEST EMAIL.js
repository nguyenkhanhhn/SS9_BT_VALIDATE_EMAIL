function Checkemail(){
    let emai=document.getElementById('Checkmail').value;
    let option=/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (option.test(emai)){
        document.getElementById('kq').innerHTML='Email hợp lệ'
    }
    else {
        document.getElementById('kq').innerHTML='Nhập lại email'
    }

}
// Checkemail()
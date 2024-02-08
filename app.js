function calculate(){
    const amount = document.querySelector("#inputAmount").value;
    const years = document.querySelector("#inputYear").value;
    const estimateEmi = (amount * 0.01) / years*12;
    document.querySelector("#total").innerHTML = "Estimmated EMI is : " + estimateEmi;
}

const otp = Math.floor(Math.random()*10000);
function generateOtp(){
alert("Your OTP is:"+otp);
}

function validationSuccess(){
    const userOtp = document.querySelector("#inputOtp").value;
    if(otp==userOtp){
        document.querySelector("#validationSuccess").innerHTML = "Validation Successful."
    }else{
        document.querySelector("#validationSuccess").innerHTML = "Please try again."
    }
}

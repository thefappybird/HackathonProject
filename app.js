var info = {
    Idnum: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Bday: "",
    ContactNum: "",
    Address: "", 
    CourseYear: "",
    Position: "",
    ContactPerson: "",
    ContNum: "",
    SSS: "",
    Philhealth: "",
    Pagibig: "",
    TIN: "",
    Purpose: ""
};
function generateQRCode(x) {
      let website ="";
      if(x == 1){
        website = "QR/studqrcode.html";
      }else if(x == 2){
        website = "QR/empqrcode.html";
      }else{
        website = "QR/visqrcode.html";
      }
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, website);
};



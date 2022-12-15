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
        website = "studqrcode.html";
      }else if(x == 2){
        website = "empqrcode.html";
      }else{
        website = "visqrcode.html";
      }
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, website);
};



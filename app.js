var info = {
    FirstName: "",
    MiddleName: "",
    LastName: "",
    ContactNum: "",
    
}
function generateQRCode() {
      
      let website = "qrcodescan.html";
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, website);
};

function studcheck(){
  var studcheck = document.getElementById("stud");
  var stud = document.getElementsByClassName("student");
  if (studcheck.checked == true) {
    console.log("pasar");
    for (var i=0;i<stud.length;i+=1){
      stud[i].style.display = 'block';
    }
  } else {
    for (var i=0;i<stud.length;i+=1){
      stud[i].style.display = 'none';
    }
  }
};
function empcheck(){
    var empcheck = document.getElementById("emp");
    var emp = document.getElementsByClassName("position");
    if (empcheck.checked == true) {
      console.log("pasar");
      for (var i=0;i<emp.length;i+=1){
        emp[i].style.display = 'block';
      }
    } else {
        for (var i=0;i<emp.length;i+=1){
            emp[i].style.display = 'none';
        }
    }
  };

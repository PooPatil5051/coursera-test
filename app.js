var student = {
  name: "",
  type: "student"
}
document.addEventListener('DomContentLoaded',contentLoaded);

function contentLoaded(event){
  document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput(){
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for(var i=0;i<student.name.length;i++){
    totalNameValue+= student.name.charCodeAt(i);
  }

  //insert result into page

  var output = "Total Numeric value of a person's name is: " + totalNameValue;
  document.getElementById('output').innerText = output;
}

var inputStr;
function loadNum() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    inputStr = this.responseText.toString();
  };
  xhttp.open("GET", "binary.txt", true);
  xhttp.send();
}
loadNum();

setTimeout(execute, 2000);

var binary2 = []
var binary1 = []
let gamma = [];
let epsilionl = [];
var ilośćjedynek = 0;
var ilośćzer =  0;
function execute() {
  var dataTab = inputStr.split("\r\n").map(String);

  const dataTwoDim = dataTab.map((command) => {
    return command.split("");
  });
  console.log(dataTwoDim);
  for (let x = 0; x < 12; x++) {
    for (let i = 0; i < 1000; i++) {
      if (dataTwoDim[i][x] == "1") {
        ilośćjedynek++;
        console.log(ilośćjedynek)
      } else {
        ilośćzer++ 
        
      }
      
      
    }
    if(ilośćjedynek > ilośćzer){
      
      gamma.push(1,)
      epsilionl.push(0,)

     }else{
      
       gamma.push(0,)
       epsilionl.push(1,)
     }
    
    ilośćjedynek = 0;
    ilośćzer = 0;
    
    
  }
  epsilionlStr = epsilionl.join('')
  gammaStr = gamma.join('')
  var wynikGamma = parseInt(gammaStr, 2)
  var wynikEpsilionl = parseInt(epsilionlStr, 2)
  var wynikOstateczny = wynikGamma * wynikEpsilionl
  console.log(wynikGamma + "= gamma")
  console.log(wynikEpsilionl + "= ecoś")
  console.log(wynikOstateczny + "= ostateczny")

}



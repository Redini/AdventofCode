var inputStr;
function loadNum() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    inputStr = this.responseText.toString();
  };
  xhttp.open("GET", "position.txt", true);
  xhttp.send();
}
loadNum();

setTimeout(execute, 2000);
setTimeout(execute1, 3000);

const splitCommands = [];
function execute() {
  var commands = inputStr.split("\r\n").map(String);

  const splitCommands = commands.map((command) => {
    return command.split(" ");
  });
  
let horizontal = 0;
let depth = 0 ;

  for(let i = 0; i < 1000; i++ ){
    // console.log(splitCommands[i][0])
    switch(splitCommands[i][0]){
      case "forward":
        horizontal +=parseInt(splitCommands[i][1])
        // console.log("Horizontal: " + horizontal)
        break;
        case "down":
          depth +=parseInt(splitCommands[i][1])
          // console.log("Depth: " + depth)
          break;
          case "up":
            depth -=parseInt(splitCommands[i][1])
            // console.log("Depth: "+ depth)
            break;

//2120749
    }
    
  }
  console.log(horizontal *depth + "Part1 answer")
}

function execute1() {
  var commands = inputStr.split("\r\n").map(String);

  const splitCommands = commands.map((command) => {
    return command.split(" ");
  });
  
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < 1000; i++) {
    // console.log(splitCommands[i][0]);
    switch (splitCommands[i][0]) {
      case "forward":
        horizontal += parseInt(splitCommands[i][1]);
        depth += parseInt(aim * splitCommands[i][1]);
        // console.log("Horizontal: " + horizontal);
        break;
      case "down":
        // depth += parseInt(splitCommands[i][1]);
        aim += parseInt(splitCommands[i][1]);
        // console.log("Depth: " + depth);
        break;
      case "up":
        aim -= parseInt(splitCommands[i][1]);
        // console.log("Depth: " + depth);
        break;

      //2120749
    }
    // console.log(horizontal * depth);
  }
  console.log(horizontal * depth+"Part2 answer");
}

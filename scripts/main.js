let g_SoFar = ";";
let preRework = "";
let score = 0;
let goes = 0;
let okCount = 0;
let nth = "";
let ok = false;
let divContent = "";
let divArray = [
  [0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],
  [0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],
  [0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],
];
let groupings = new Array("");

function populateGroupings() {
  let goneSoFar = ";";
  let calcSign;
  let plusSup = "";
  let upAcross = 0;
  let numOnes = 0;
  let numThrees = 0;
  let lowerValue = 1;
  let offset = 0;
  let groupingsLength = groupings.length;

  g_SoFar = `;${groupings[0]};`;
  if (groupingsLength == 1) {
    groupings[0] = "";
  }

  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 6; column++) {
      if (row == 0) {
        document
          .getElementById("td" + eval(row + 1) + eval(column + 1))
          .classList.add("borderTop");
      }
      if (row == 5) {
        document
          .getElementById("td" + eval(row + 1) + eval(column + 1))
          .classList.add("borderBottom");
      }
      if (column == 0) {
        document
          .getElementById("td" + eval(row + 1) + eval(column + 1))
          .classList.add("borderLeft");
      }
      if (column == 5) {
        document
          .getElementById("td" + eval(row + 1) + eval(column + 1))
          .classList.add("borderRight");
      }
      if (g_SoFar.indexOf("mda[" + row + "][" + column + "]") == -1) {
        if (groupingsLength == 1) {
          groupings[0] = "";
        } else {
          groupings.push("");
        }
        groupingsLength = groupings.length;
        upAcross = Math.floor(Math.random() * 1) + 0;
        let numOfSquares =
          Math.floor(Math.random() * eval(4 - lowerValue - offset)) +
          lowerValue;
        if (numOfSquares == 3) {
          numThrees++;
          if (numThrees >= 2) offset++;
        } else if (numOfSquares == 1) {
          if (
            goneSoFar.indexOf(";mda[" + row + "]") != -1 ||
            goneSoFar.indexOf("][" + column + "]") != -1
          ) {
            numOfSquares++;
          } else {
            numOnes++;
            goneSoFar += "mda[" + row + "][" + column + "];";
            g_SoFar += "mda[" + row + "][" + column + "];";
            groupings[eval(groupingsLength - 1)] = divArray[row][column];
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderTop");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderBottom");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderLeft");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderRight");

            if (numOnes >= 4) {
              offset++;
              lowerValue = 1;
            }
          }
        }

        if (numOfSquares == 3) {
          if (eval((Math.floor(Math.random() * 80) + 0) % 2) == 0) {
            calcSign = "+";
          } else {
            calcSign = "*";
          }
          if (upAcross == 0) {
            if (column == 5) {
              upAcross = 1;
            } else if (row < 5) {
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 2))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 2))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 2))
                .classList.add("borderRight");
              g_SoFar +=
                "mda[" +
                row +
                "][" +
                column +
                "]" +
                calcSign +
                "mda[" +
                row +
                "][" +
                eval(column + 1) +
                "]" +
                calcSign;
              g_SoFar += "mda[" + eval(row + 1) + "][" + eval(column + 1) + "];";
              groupings[eval(groupingsLength - 1)] =
                eval(
                  divArray[row][column] +
                    calcSign +
                    divArray[row][eval(column + 1)] +
                    calcSign +
                    divArray[eval(row + 1)][eval(column + 1)]
                ) + calcSign;
              upAcross = -1;
            } else {
              numOfSquares = 2;
            }
          }
          if (upAcross == 1 && numOfSquares == 3) {
            if (row == 5) {
              upAcross = 0;
            } else if (column < 5) {
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderRight");

              document
                .getElementById("td" + eval(row + 2) + eval(column + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 1))
                .classList.add("borderBottom");

              document
                .getElementById("td" + eval(row + 2) + eval(column + 2))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 2))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 2))
                .classList.add("borderTop");

              g_SoFar +=
                "mda[" +
                row +
                "][" +
                column +
                "]" +
                calcSign +
                "mda[" +
                eval(row + 1) +
                "][" +
                column +
                "]" +
                calcSign;
              g_SoFar += "mda[" + eval(row + 1) + "][" + eval(column + 1) + "];";
              groupings[eval(groupingsLength - 1)] =
                eval(
                  divArray[row][column] +
                    calcSign +
                    divArray[eval(row + 1)][column] +
                    calcSign +
                    divArray[eval(row + 1)][eval(column + 1)]
                ) + calcSign;
              upAcross = -1;
            } else {
              numOfSquares = 2;
            }
          }
          if (upAcross == 0 && numOfSquares == 3) {
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderLeft");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 2))
              .classList.add("borderRight");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderTop");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 2))
              .classList.add("borderTop");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderBottom");
            document
              .getElementById("td" + eval(row + 2) + eval(column + 2))
              .classList.add("borderBottom");
            document
              .getElementById("td" + eval(row + 2) + eval(column + 2))
              .classList.add("borderLeft");
            document
              .getElementById("td" + eval(row + 2) + eval(column + 2))
              .classList.add("borderRight");
            g_SoFar +=
              "mda[" +
              row +
              "][" +
              column +
              "]" +
              calcSign +
              "mda[" +
              row +
              "][" +
              eval(column + 1) +
              "]" +
              calcSign;
            g_SoFar += "mda[" + eval(row + 1) + "][" + eval(column + 1) + "];";
            groupings[eval(groupingsLength - 1)] =
              eval(
                divArray[row][column] +
                  calcSign +
                  divArray[row][eval(column + 1)] +
                  calcSign +
                  divArray[eval(row + 1)][eval(column + 1)]
              ) + calcSign;
            upAcross = -1;
          }
        }

        if (numOfSquares == 2) {
          if (upAcross == 0) {
            if (column == 5) {
              upAcross = 1;
            } else if (
              g_SoFar.indexOf("mda[" + row + "][" + eval(column + 1) + "]") != -1
            ) {
              //numsquares = 1;
              upAcross = 1;
            } else {
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderBottom");
              if (
                eval(divArray[row][column]) < eval(divArray[row][eval(column + 1)]) &&
                eval((Math.floor(Math.random() * 80) + 0) % 2) == 0
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]+mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] + divArray[row][eval(column + 1)]) + "+";
              } else if (
                eval(divArray[row][column]) < eval(divArray[row][eval(column + 1)])
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]*mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] * divArray[row][eval(column + 1)]) + "*";
              } else if (
                eval(divArray[row][column] % divArray[row][eval(column + 1)]) == 0 &&
                eval(divArray[row][column] / divArray[row][eval(column + 1)]) <= 3
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]/mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] / divArray[row][eval(column + 1)]) + "/";
              } else {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]-mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] - divArray[row][eval(column + 1)]) + "-";
              }
              //gsofar+="mda[" + irow + "][" + icol + "],mda[" + irow + "][" + eval(icol + 1) + "];";
              upAcross = -1;
            }
          }
          if (upAcross == 1) {
            if (row == 5) {
              upAcross = 0;
            } else if (
              g_SoFar.indexOf("mda[" + eval(row + 1) + "][" + column + "]") != -1
            ) {
              numOfSquares = 1;
              upAcross = -1;
            } else {
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 1))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 2) + eval(column + 1))
                .classList.add("borderBottom");
              if (
                eval(divArray[row][column]) < eval(divArray[eval(row + 1)][column]) &&
                eval((Math.floor(Math.random() * 80) + 0) % 2) == 0
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]+mda[" +
                  eval(row + 1) +
                  "][" +
                  column +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] + divArray[eval(row + 1)][column]) + "+";
              } else if (
                eval(divArray[row][column]) < eval(divArray[eval(row + 1)][column])
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]*mda[" +
                  eval(row + 1) +
                  "][" +
                  column +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] * divArray[eval(row + 1)][column]) + "*";
              } else if (
                eval(divArray[row][column] % divArray[row][eval(column + 1)]) == 0 &&
                eval(divArray[row][column] / divArray[row][eval(column + 1)]) <= 3
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]/mda[" +
                  eval(row + 1) +
                  "][" +
                  column +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] / divArray[eval(row + 1)][column]) + "/";
              } else {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]-mda[" +
                  eval(row + 1) +
                  "][" +
                  column +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] - divArray[eval(row + 1)][column]) + "-";
              }
              //gsofar+="mda[" + irow + "][" + icol + "],mda[" + eval(irow + 1) + "][" + icol + "];";
              upAcross = -1;
              //document.getElementById('myh1').innerHTML=gsofar;
            }
          }
          if (upAcross == 0) {
            if (
              g_SoFar.indexOf("mda[" + row + "][" + eval(column + 1) + "]") != -1
            ) {
              numOfSquares = 1;
              upAcross = -1;
            } else {
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 1))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(row + 1) + eval(column + 2))
                .classList.add("borderBottom");
              if (
                eval(divArray[row][column]) < eval(divArray[row][eval(column + 1)]) &&
                eval((Math.floor(Math.random() * 80) + 0) % 2) == 0
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]+mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] + divArray[row][eval(column + 1)]) + "+";
              } else if (
                eval(divArray[row][column]) < eval(divArray[row][eval(column + 1)])
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]*mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] * divArray[row][eval(column + 1)]) + "*";
              } else if (
                eval(divArray[row][column] % divArray[row][eval(column + 1)]) == 0 &&
                eval(divArray[row][column] / divArray[row][eval(column + 1)]) <= 3
              ) {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]/mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] / divArray[row][eval(column + 1)]) + "/";
              } else {
                g_SoFar +=
                  "mda[" +
                  row +
                  "][" +
                  column +
                  "]-mda[" +
                  row +
                  "][" +
                  eval(column + 1) +
                  "];";
                groupings[eval(groupingsLength - 1)] =
                  eval(divArray[row][column] - divArray[row][eval(column + 1)]) + "-";
              }
              //gsofar+="mda[" + irow + "][" + icol + "],mda[" + irow + "][" + eval(icol + 1) + "];";
              upAcross = -1;
            }
          }
          if (numOfSquares == 1) {
            goneSoFar += "mda[" + row + "][" + column + "];";
            g_SoFar += "mda[" + row + "][" + column + "];";
            groupings[eval(groupingsLength - 1)] = divArray[row][column];
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderTop");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderBottom");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderLeft");
            document
              .getElementById("td" + eval(row + 1) + eval(column + 1))
              .classList.add("borderRight");
          }
        }
        plusSup = (
          "<sup>" +
          groupings[eval(groupingsLength - 1)] +
          "</sup>" +
          document.getElementById("td" + eval(row + 1) + eval(column + 1))
            .innerHTML
        ).replace("NaN", divArray[row][column]);
        document.getElementById(
          "td" + eval(row + 1) + eval(column + 1)
        ).innerHTML = plusSup;
        //alert("document.getElementById('td" + eval(irow + 1) + eval(icol + 1) + "').innerHTML=" + document.getElementById('td' + eval(irow + 1) + eval(icol + 1)).innerHTML);
        //alert(numsquares);
      } else {
        plusSup = (
          "<sup>&nbsp;</sup>" +
          document.getElementById("td" + eval(row + 1) + eval(column + 1))
            .innerHTML
        ).replace("NaN", divArray[row][column]);
        document.getElementById(
          "td" + eval(row + 1) + eval(column + 1)
        ).innerHTML = plusSup;
      }
    }
  }
  //alert(0);
  //alert(gsofar);
}

function populate() {
  let tdObject;
  let tdObjectSpare;
  let guess = "";
  let kRow;
  let cnt = 0;
  let returnValue = true;

  if (divContent == "") {
    divContent = document.getElementById("mydiv").innerHTML;
  } else {
    document.getElementById("mydiv").innerHTML = divContent;
  }
  okCount = 0;
  document.title += ".";
  for (let row = 1; row <= 6; row++) {
    let soFar = ";;";
    guess = "";
    for (let column = 1; column <= 6; column++) {
      tdObject = document.getElementById("td" + row + column);
      cnt = 0;
      ok = false;
      while (!ok) {
        while (soFar.indexOf(";" + guess + ";") != -1) {
          guess = Math.floor(Math.random() * 6) + 1;
        }
        ok = true;
        if (row > 1) {
          ok = true;
          for (kRow = 1; kRow < row; kRow++) {
            tdObjectSpare = document.getElementById("td" + kRow + column);
            if (tdObjectSpare.innerHTML.indexOf(">" + guess + "<") != -1) {
              cnt++;
              //alert(guess + " " + sofar + ":" + tdospare.innerHTML);
              ok = false;
              if (cnt == 20) return false;
            }
          }
        }
        if (!ok) guess = Math.floor(Math.random() * 6) + 1;
      }
      tdObject.innerHTML = 
        "<div align='center'><font size=3 id='f" +
        eval(row - 1) +
        eval(column - 1) +
        "' style='display:none;'>" +
        guess +
        "</font></div>";
      divArray[eval(row - 1)][eval(column - 1)] = eval(guess);
      soFar += guess + ";";
    }
  }
  if (returnValue) {
    populateGroupings();
    rework(document.getElementById("mydiv").innerHTML);
    goes++;
    document.getElementById("myh4").innerHTML =
      "Score: " + score + " Goes: " + goes;
  }
  return returnValue;
}

function makeSelectControl(whichField, superscript) {
  if (superscript != "-" && superscript != "*" && superscript != "/" && superscript != "+") {
    okCount++;
    return (
      '<select onchange=" if (eval(this.value) != ' +
      whichField +
      ") { this.value=" +
      whichField +
      '; } else { okcnt=okcnt; } "><option></option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option></select>'
    ).replace(" value=" + superscript, " value=" + superscript + " selected");
  }
  return (
    '<select onchange=" if (eval(this.value) != ' +
    whichField +
    ') { this.value=nth; } else { okcnt++; } "><option></option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option></select>'
  );
}

function rework(inMyDiv) {
  preRework = inMyDiv.replace(/none/g, "inline");
  let outMyDiv = inMyDiv;
  let myNumber = 0;
  let mySuperscriptChar = "";
  let outElementFont = outMyDiv.split("</font>");
  let mySuperscripts;

  outMyDiv = outElementFont[0];
  for (let ii = 1; ii < outElementFont.length; ii++) {
    mySuperscripts = outElementFont[eval(ii - 1)].split("</sup>");
    mySuperscriptChar = "+";
    if (mySuperscripts.length > 1) {
      mySuperscriptChar = mySuperscripts[0].substring(eval(mySuperscripts[0].length - 1));
    }
    myNumber = outElementFont[eval(ii - 1)].substring(eval(outElementFont[eval(ii - 1)].length - 1));
    outMyDiv += "</font>" + makeSelectControl(myNumber, mySuperscriptChar) + outElementFont[ii];
  }
  document.getElementById("mydiv").innerHTML = outMyDiv;
}

function check() {
  if (eval(okCount) >= 36) {
    score++;
    okCount = 0;
    document.getElementById("myh4").innerHTML = "Score: " + score + " Goes: " + goes;
    alert("Congratulations!");
    groupings = new Array("");
    while (!populate()) {
      ok = ok;
    }
  } else if (eval(okCount) == -10) {
    document.getElementById("mydiv").innerHTML = preRework;
    okCount++;
  } else if (eval(okCount) < 0) {
    okCount++;
    if (eval(okCount) == 0) {
      groupings = new Array("");
      while (!populate()) {
        ok = ok;
      }
    }
  }
  setTimeout(check, 1000);
}

while (!populate()) {
  ok = ok;
}
setTimeout(check, 1000);

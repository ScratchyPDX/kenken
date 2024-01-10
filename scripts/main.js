var gsofar = ";";
var prerework = "";
var score = 0;
var goes = 0;
var okcnt = 0;
var nth = "";
var ok = false;
var divcontent = "";
var mda = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];
var groupings = new Array("");

function populategroupings() {
  var gonesofar = ";",
    csign = "+",
    plussup = "";
  var numsquares = 0,
    upacross = 0,
    timesplus = 0;
  var numones = 0,
    numthrees = 0,
    lowerval = 1,
    offset = 0;
  var gslen = groupings.length;
  gsofar = ";" + groupings[0] + ";";
  if (gslen == 1) groupings[0] = "";
  //alert(99);
  for (var irow = 0; irow < 6; irow++) {
    for (var icol = 0; icol < 6; icol++) {
      //alert(gsofar);
      if (irow == 0) {
        document
          .getElementById("td" + eval(irow + 1) + eval(icol + 1))
          .classList.add("borderTop");
      }
      if (irow == 5) {
        document
          .getElementById("td" + eval(irow + 1) + eval(icol + 1))
          .classList.add("borderBottom");
      }
      if (icol == 0) {
        document
          .getElementById("td" + eval(irow + 1) + eval(icol + 1))
          .classList.add("borderLeft");
      }
      if (icol == 5) {
        document
          .getElementById("td" + eval(irow + 1) + eval(icol + 1))
          .classList.add("borderRight");
      }
      if (gsofar.indexOf("mda[" + irow + "][" + icol + "]") == -1) {
        //alert("td" + irow + icol);
        if (gslen == 1) {
          groupings[0] = "";
        } else {
          groupings.push("");
        }
        gslen = groupings.length;
        upacross = Math.floor(Math.random() * 1) + 0;
        numsquares =
          Math.floor(Math.random() * eval(4 - lowerval - offset)) + lowerval;
        if (numsquares == 3) {
          numthrees++;
          if (numthrees >= 2) offset++;
        } else if (numsquares == 1) {
          if (
            gonesofar.indexOf(";mda[" + irow + "]") != -1 ||
            gonesofar.indexOf("][" + icol + "]") != -1
          ) {
            numsquares++;
          } else {
            numones++;
            gonesofar += "mda[" + irow + "][" + icol + "];";
            gsofar += "mda[" + irow + "][" + icol + "];";
            groupings[eval(gslen - 1)] = mda[irow][icol];
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 1))
              .classList.add("borderTop");
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 1))
              .classList.add("borderBottom");
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 1))
              .classList.add("borderLeft");
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 1))
              .classList.add("borderRight");

            if (numones >= 4) {
              offset++;
              lowerval = 1;
            }
          }
        }

        if (numsquares == 3) {
          if (eval((Math.floor(Math.random() * 80) + 0) % 2) == 0) {
            csign = "+";
          } else {
            csign = "*";
          }
          if (upacross == 0) {
            if (icol == 5) {
              upacross = 1;
            } else if (irow < 5) {
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 2))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 2))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 2))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 2))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 2))
                .classList.add("borderRight");
              gsofar +=
                "mda[" +
                irow +
                "][" +
                icol +
                "]" +
                csign +
                "mda[" +
                irow +
                "][" +
                eval(icol + 1) +
                "]" +
                csign;
              gsofar += "mda[" + eval(irow + 1) + "][" + eval(icol + 1) + "];";
              groupings[eval(gslen - 1)] =
                eval(
                  mda[irow][icol] +
                    csign +
                    mda[irow][eval(icol + 1)] +
                    csign +
                    mda[eval(irow + 1)][eval(icol + 1)]
                ) + csign;
              upacross = -1;
            } else {
              numsquares = 2;
            }
          }
          if (upacross == 1 && numsquares == 3) {
            if (irow == 5) {
              upacross = 0;
            } else if (icol < 5) {
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderRight");

              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 1))
                .classList.add("borderBottom");

              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 2))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 2))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(irow + 2) + eval(icol + 2))
                .classList.add("borderTop");

              gsofar +=
                "mda[" +
                irow +
                "][" +
                icol +
                "]" +
                csign +
                "mda[" +
                eval(irow + 1) +
                "][" +
                icol +
                "]" +
                csign;
              gsofar += "mda[" + eval(irow + 1) + "][" + eval(icol + 1) + "];";
              groupings[eval(gslen - 1)] =
                eval(
                  mda[irow][icol] +
                    csign +
                    mda[eval(irow + 1)][icol] +
                    csign +
                    mda[eval(irow + 1)][eval(icol + 1)]
                ) + csign;
              upacross = -1;
            } else {
              numsquares = 2;
            }
          }
          if (upacross == 0 && numsquares == 3) {
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 1))
              .classList.add("borderLeft");
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 2))
              .classList.add("borderRight");
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 1))
              .classList.add("borderTop");
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 2))
              .classList.add("borderTop");
            document
              .getElementById("td" + eval(irow + 1) + eval(icol + 1))
              .classList.add("borderBottom");
            document
              .getElementById("td" + eval(irow + 2) + eval(icol + 2))
              .classList.add("borderBottom");
            document
              .getElementById("td" + eval(irow + 2) + eval(icol + 2))
              .classList.add("borderLeft");
            document
              .getElementById("td" + eval(irow + 2) + eval(icol + 2))
              .classList.add("borderRight");
            gsofar +=
              "mda[" +
              irow +
              "][" +
              icol +
              "]" +
              csign +
              "mda[" +
              irow +
              "][" +
              eval(icol + 1) +
              "]" +
              csign;
            gsofar += "mda[" + eval(irow + 1) + "][" + eval(icol + 1) + "];";
            groupings[eval(gslen - 1)] =
              eval(
                mda[irow][icol] +
                  csign +
                  mda[irow][eval(icol + 1)] +
                  csign +
                  mda[eval(irow + 1)][eval(icol + 1)]
              ) + csign;
            upacross = -1;
          }
        }

        if (numsquares == 2) {
          if (upacross == 0) {
            if (icol == 5) {
              upacross = 1;
            } else if (
              gsofar.indexOf("mda[" + irow + "][" + eval(icol + 1) + "]") != -1
            ) {
              //numsquares = 1;
              upacross = 1;
            } else {
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderLeft");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 2))
                .classList.add("borderRight");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 2))
                .classList.add("borderTop");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 1))
                .classList.add("borderBottom");
              document
                .getElementById("td" + eval(irow + 1) + eval(icol + 2))
                .classList.add("borderBottom");
              if (
                eval(mda[irow][icol]) < eval(mda[irow][eval(icol + 1)]) &&
                eval((Math.floor(Math.random() * 80) + 0) % 2) == 0
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]+mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] + mda[irow][eval(icol + 1)]) + "+";
              } else if (
                eval(mda[irow][icol]) < eval(mda[irow][eval(icol + 1)])
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]*mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] * mda[irow][eval(icol + 1)]) + "*";
              } else if (
                eval(mda[irow][icol] % mda[irow][eval(icol + 1)]) == 0 &&
                eval(mda[irow][icol] / mda[irow][eval(icol + 1)]) <= 3
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]/mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] / mda[irow][eval(icol + 1)]) + "/";
              } else {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]-mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] - mda[irow][eval(icol + 1)]) + "-";
              }
              //gsofar+="mda[" + irow + "][" + icol + "],mda[" + irow + "][" + eval(icol + 1) + "];";
              upacross = -1;
            }
          }
          if (upacross == 1) {
            if (irow == 5) {
              upacross = 0;
            } else if (
              gsofar.indexOf("mda[" + eval(irow + 1) + "][" + icol + "]") != -1
            ) {
              numsquares = 1;
              upacross = -1;
            } else {
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 1)
              ).classList.add("borderLeft");
              document.getElementById(
                "td" + eval(irow + 2) + eval(icol + 1)
              ).classList.add("borderLeft");
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 1)
              ).classList.add("borderRight");
              document.getElementById(
                "td" + eval(irow + 2) + eval(icol + 1)
              ).classList.add("borderRight");
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 1)
              ).classList.add("borderTop");
              document.getElementById(
                "td" + eval(irow + 2) + eval(icol + 1)
              ).classList.add("borderBottom");
              if (
                eval(mda[irow][icol]) < eval(mda[eval(irow + 1)][icol]) &&
                eval((Math.floor(Math.random() * 80) + 0) % 2) == 0
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]+mda[" +
                  eval(irow + 1) +
                  "][" +
                  icol +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] + mda[eval(irow + 1)][icol]) + "+";
              } else if (
                eval(mda[irow][icol]) < eval(mda[eval(irow + 1)][icol])
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]*mda[" +
                  eval(irow + 1) +
                  "][" +
                  icol +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] * mda[eval(irow + 1)][icol]) + "*";
              } else if (
                eval(mda[irow][icol] % mda[irow][eval(icol + 1)]) == 0 &&
                eval(mda[irow][icol] / mda[irow][eval(icol + 1)]) <= 3
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]/mda[" +
                  eval(irow + 1) +
                  "][" +
                  icol +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] / mda[eval(irow + 1)][icol]) + "/";
              } else {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]-mda[" +
                  eval(irow + 1) +
                  "][" +
                  icol +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] - mda[eval(irow + 1)][icol]) + "-";
              }
              //gsofar+="mda[" + irow + "][" + icol + "],mda[" + eval(irow + 1) + "][" + icol + "];";
              upacross = -1;
              //document.getElementById('myh1').innerHTML=gsofar;
            }
          }
          if (upacross == 0) {
            if (
              gsofar.indexOf("mda[" + irow + "][" + eval(icol + 1) + "]") != -1
            ) {
              numsquares = 1;
              upacross = -1;
            } else {
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 1)
              ).classList.add("borderLeft");
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 2)
              ).classList.add("borderRight");
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 1)
              ).classList.add("borderTop");
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 2)
              ).classList.add("borderTop");
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 1)
              ).classList.add("borderBottom");
              document.getElementById(
                "td" + eval(irow + 1) + eval(icol + 2)
              ).classList.add("borderBottom");
              if (
                eval(mda[irow][icol]) < eval(mda[irow][eval(icol + 1)]) &&
                eval((Math.floor(Math.random() * 80) + 0) % 2) == 0
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]+mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] + mda[irow][eval(icol + 1)]) + "+";
              } else if (
                eval(mda[irow][icol]) < eval(mda[irow][eval(icol + 1)])
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]*mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] * mda[irow][eval(icol + 1)]) + "*";
              } else if (
                eval(mda[irow][icol] % mda[irow][eval(icol + 1)]) == 0 &&
                eval(mda[irow][icol] / mda[irow][eval(icol + 1)]) <= 3
              ) {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]/mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] / mda[irow][eval(icol + 1)]) + "/";
              } else {
                gsofar +=
                  "mda[" +
                  irow +
                  "][" +
                  icol +
                  "]-mda[" +
                  irow +
                  "][" +
                  eval(icol + 1) +
                  "];";
                groupings[eval(gslen - 1)] =
                  eval(mda[irow][icol] - mda[irow][eval(icol + 1)]) + "-";
              }
              //gsofar+="mda[" + irow + "][" + icol + "],mda[" + irow + "][" + eval(icol + 1) + "];";
              upacross = -1;
            }
          }
          if (numsquares == 1) {
            gonesofar += "mda[" + irow + "][" + icol + "];";
            gsofar += "mda[" + irow + "][" + icol + "];";
            groupings[eval(gslen - 1)] = mda[irow][icol];
            document.getElementById(
              "td" + eval(irow + 1) + eval(icol + 1)
            ).classList.add("borderTop");
            document.getElementById(
              "td" + eval(irow + 1) + eval(icol + 1)
            ).classList.add("borderBottom");
            document.getElementById(
              "td" + eval(irow + 1) + eval(icol + 1)
            ).classList.add("borderLeft");
            document.getElementById(
              "td" + eval(irow + 1) + eval(icol + 1)
            ).classList.add("borderRight");
          }
        }
        plussup = (
          "<sup>" +
          groupings[eval(gslen - 1)] +
          "</sup>" +
          document.getElementById("td" + eval(irow + 1) + eval(icol + 1))
            .innerHTML
        ).replace("NaN", mda[irow][icol]);
        document.getElementById(
          "td" + eval(irow + 1) + eval(icol + 1)
        ).innerHTML = plussup;
        //alert("document.getElementById('td" + eval(irow + 1) + eval(icol + 1) + "').innerHTML=" + document.getElementById('td' + eval(irow + 1) + eval(icol + 1)).innerHTML);
        //alert(numsquares);
      } else {
        plussup = (
          "<sup>&nbsp;</sup>" +
          document.getElementById("td" + eval(irow + 1) + eval(icol + 1))
            .innerHTML
        ).replace("NaN", mda[irow][icol]);
        document.getElementById(
          "td" + eval(irow + 1) + eval(icol + 1)
        ).innerHTML = plussup;
      }
    }
  }
  //alert(0);
  //alert(gsofar);
}

function populate() {
  var tdo,
    tdospare,
    sofar = ";;",
    guess = "",
    krow,
    cnt = 0,
    retval = true,
    tdoinnerhtml = "";
  if (divcontent == "") {
    divcontent = document.getElementById("mydiv").innerHTML;
  } else {
    document.getElementById("mydiv").innerHTML = divcontent;
  }
  okcnt = 0;
  document.title += ".";
  for (var irow = 1; irow <= 6; irow++) {
    sofar = ";;";
    guess = "";
    for (var icol = 1; icol <= 6; icol++) {
      tdo = document.getElementById("td" + irow + icol);
      cnt = 0;
      ok = false;
      while (!ok) {
        while (sofar.indexOf(";" + guess + ";") != -1) {
          guess = Math.floor(Math.random() * 6) + 1;
        }
        ok = true;
        if (irow > 1) {
          ok = true;
          for (krow = 1; krow < irow; krow++) {
            tdospare = document.getElementById("td" + krow + icol);
            if (tdospare.innerHTML.indexOf(">" + guess + "<") != -1) {
              cnt++;
              //alert(guess + " " + sofar + ":" + tdospare.innerHTML);
              ok = false;
              if (cnt == 20) return false;
            }
          }
        }
        if (!ok) guess = Math.floor(Math.random() * 6) + 1;
      }
      tdo.innerHTML =
        "<div align='center'><font size=3 id='f" +
        eval(irow - 1) +
        eval(icol - 1) +
        "' style='display:none;'>" +
        guess +
        "</font></div>";
      mda[eval(irow - 1)][eval(icol - 1)] = eval(guess);
      sofar += guess + ";";
    }
  }
  if (retval) {
    populategroupings();
    rework(document.getElementById("mydiv").innerHTML);
    goes++;
    document.getElementById("myh4").innerHTML =
      "Score: " + score + " Goes: " + goes;
  }
  return retval;
}

function makesel(iwhich, isup) {
  if (isup != "-" && isup != "*" && isup != "/" && isup != "+") {
    okcnt++;
    return (
      '<select onchange=" if (eval(this.value) != ' +
      iwhich +
      ") { this.value=" +
      iwhich +
      '; } else { okcnt=okcnt; } "><option></option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option></select>'
    ).replace(" value=" + isup, " value=" + isup + " selected");
  }
  return (
    '<select onchange=" if (eval(this.value) != ' +
    iwhich +
    ') { this.value=nth; } else { okcnt++; } "><option></option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option></select>'
  );
}

function rework(inmydiv) {
  prerework = inmydiv.replace(/none/g, "inline");
  var outmydiv = inmydiv;
  var mynum = 0,
    mysupchar = "";
  var outef = outmydiv.split("</font>");
  var mysups;
  outmydiv = outef[0];
  for (var ii = 1; ii < outef.length; ii++) {
    mysups = outef[eval(ii - 1)].split("</sup>");
    mysupchar = "+";
    if (mysups.length > 1) {
      mysupchar = mysups[0].substring(eval(mysups[0].length - 1));
    }
    mynum = outef[eval(ii - 1)].substring(eval(outef[eval(ii - 1)].length - 1));
    outmydiv += "</font>" + makesel(mynum, mysupchar) + outef[ii];
  }
  document.getElementById("mydiv").innerHTML = outmydiv;
}

function check() {
  if (eval(okcnt) >= 36) {
    score++;
    okcnt = 0;
    document.getElementById("myh4").innerHTML =
      "Score: " + score + " Goes: " + goes;
    alert("Congratulations!");
    groupings = new Array("");
    while (!populate()) {
      ok = ok;
    }
  } else if (eval(okcnt) == -10) {
    document.getElementById("mydiv").innerHTML = prerework;
    okcnt++;
  } else if (eval(okcnt) < 0) {
    okcnt++;
    if (eval(okcnt) == 0) {
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

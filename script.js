function createRow(c) {
  let row = document.createElement("tr");
  row.setAttribute("ID", "t" + count);
  row.setAttribute("class", "row");

  let id = document.createElement("td");
  id.setAttribute("class", "id");
  id.innerHTML = count;

  let tt = document.createElement("td");
  tt.innerHTML = task.value;
  row.setAttribute("class", "task");

  row.appendChild(id);
  row.appendChild(tt);
  table.appendChild(row);
}

var count = 0;
var task = document.querySelector("#add");
var table = document.querySelector("tbody");

function run() {
  if (count == 0) {
    count++;
    let r = document.querySelector("#t1");
    let n = r.childNodes;
    n[1].innerHTML = count;
    n[3].innerHTML = task.value;
  } else {
    count++;
    createRow(count);
  }
  task.value = "";
}
var idt = document.querySelector("#idt");
function del() {
  let deE = "#t" + idt.value;
  let n = document.querySelector(deE);
  document.querySelector("tbody").removeChild(n);
  idt.value = "";
}
var ed = document.querySelector("#edit");
function edit() {
  let deE = "#t" + idt.value;
  let n = document.querySelector(deE);
  let t = n.childNodes;
  if (deE == "#t1") {
    t[3].innerHTML = ed.value;
  } else {
    t[1].innerHTML = ed.value;
  }
  idt.value = "";
  ed.value = "";
}

document.querySelector(".addBut").addEventListener("click", run);
document.querySelector(".del").addEventListener("click", del);
document.querySelector(".up").addEventListener("click", edit);

//selectors
const input = document.querySelector('.input');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const button = document.querySelector('.button');
const list = document.querySelector('.list');




//eventlisteners
button.addEventListener('click', addClass)
list.addEventListener("click", deleteCheck)

var count = 0;
updatehtml()
//functions
function addClass(event)
{
  event.preventDefault();

  if(input2.value != "A" && input2.value != "B" && input2.value != "C" && input2.value != "D" && input2.value != "F" && input2.value != "a" && input2.value != "b" && input2.value != "c" && input2.value != "d" && input2.value != "f")
  {
    alert("bruh");
    return;
  }

  //creating the div
  const creatediv = document.createElement("div");
  creatediv.classList.add("grade");

  //creating li
  const newClass = document.createElement("li");



  newClass.setAttribute('data-hours', input3.value);
  if(input2.value == "A" || input2.value == "a")
    { newClass.setAttribute('data-grade', 4);
    newClass.setAttribute('data-quality', (4 * input3.value));}
    else if(input2.value == "B" || input2.value == "b")
      { newClass.setAttribute('data-grade', 3);
      newClass.setAttribute('data-quality', (3 * input3.value));}
      else if(input2.value == "C" || input2.value == "c")
        { newClass.setAttribute('data-grade', 2);
        newClass.setAttribute('data-quality', (2 * input3.value));}
        else if(input2.value == "D" || input2.value == "d")
          { newClass.setAttribute('data-grade', 1);
          newClass.setAttribute('data-quality', (1 * input3.value));}
          else
            { newClass.setAttribute('data-grade', 0);
            newClass.setAttribute('data-quality', 0);
             }

  //newClass.innerText = input.value + " Grade: " + input2.value + " Credits: " + input3.value;
  newClass.innerHTML = "<div class='gpaobject'><h2>" + input.value + "</h2><h2>Grade: "+ input2.value.toUpperCase() + "</h2><h2>Credits: "+ input3.value + "</div>";
  newClass.classList.add("item");
  creatediv.appendChild(newClass);
   //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  deleteButton.classList.add("deletebutton");
  creatediv.appendChild(deleteButton);

  list.prepend(creatediv);
  //clear input

  input.value ="";
  input2.value ="";
  input3.value ="";

//var l = document.getElementsByTagName("li");

//for (var index = 0; index < l.length; index++) {
  //  alert(l[index].getAttribute('data-quality'));
//}

count = count + 1;

updatehtml();

}

function deleteCheck(e)
{
  const item = e.target;
  if(item.classList[0] === 'deletebutton')
  {
    const parentelement = item.parentElement;
    parentelement.style.opacity = '0';
    setTimeout(function(){parentelement.remove();}, 100);
    //parentelement.remove();
    count = count - 1;
  }


  updatehtml();


}

function updatehtml()
{
  var l = document.getElementsByTagName("li");

  var qp=0;
  var hours=0;
  var gpa = 0;
  document.getElementById("total").innerText = gpa;
  for (var i = 0; i < l.length; i++)
  {
    var qp = qp + parseInt(l[i].getAttribute('data-quality'));
    var hours = hours + parseInt(l[i].getAttribute('data-hours'));
    gpatotal = (qp/hours);
    var gpa = gpatotal.toFixed(2);
    if(count == 0) {gpa = 0;}
    document.getElementById("total").innerText = gpa;
    var color = document.getElementById("rightside");
    if (gpa == 0) { color.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';}
    if (gpa <= 1 && gpa != 0) { color.style.backgroundColor = 'rgba(249, 29, 0, 0.25)';}
    if (gpa > 1 && gpa <= 2) { color.style.backgroundColor = 'rgba(249, 141, 0, 0.25)';}
    if (gpa > 2 && gpa <= 3) { color.style.backgroundColor = 'rgba(237, 249, 0, 0.25)';}
    if (gpa > 3) { color.style.backgroundColor = 'rgba(16, 249, 0, 0.25)';}

  }

//  if(count == 0)
//  {
//    document.getElementById("total").innerText = 0.0;
//  }

}
/*
var l = document.getElementsByTagName("li");

for (var i = 0; i < l.length; i++)
{
  var qp = qp + l[i].getAttribute('data-quality');
  document.getElementById("total").innerText = qp;
}
*/

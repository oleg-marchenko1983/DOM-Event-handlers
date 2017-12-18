
/*  Globs */
const addGroupBtn = document.querySelector("#add-group");
const inputList = document.querySelector(".input-list");
/* Function defs */
const handleAddGroupBtnClick = (evt) =>  {
  const inputGroup = createInputGroup();
  addInputGroup(inputList, inputGroup);
}
const handleListClick = (evt) => {
  const target = evt.target;
  const nodeName = target.nodeName;
  if(target !== this && nodeName === 'BUTTON') {
    target.parentNode.remove();
  }
}
const createInputGroup = () => {
  const container = document.createElement("div");
  const input = document.createElement("input");
  const btn = document.createElement("button");

  input.setAttribute("type", "text");
  input.className = "createdByInput"
  btn.textContent = "-";
  container.append(input, btn);
  return container;
}
const addInputGroup = (parent, el) => {
  parent.append(el);
}

const addTextAreaValue = () => {
  let textArea = document.querySelector('#textArea');
  let inputValues = document.getElementsByClassName('createdByInput');
  let radioButtons = document.getElementsByName('radio');
  let array = [];

  const outputValues = (val) => {
    if(val.value === "") {
      val.style.border = "2px solid red";
      val.innerHTML = "";
      alert('Не все поля заполнены');
    } else {
      array.push(val.value);
      let stringSymbol = array.join('--&&--');
      textArea.innerHTML = stringSymbol;
    }
  }

  if (radioButtons[1].checked) {
    for (let i = 0; i < inputValues.length; i += 2) {
      outputValues(inputValues[i],inputValues.length);
    }
  } else if (radioButtons[2].checked ) {
    for (let i = 1; i < inputValues.length; i += 2) {
      outputValues(inputValues[i],inputValues.length);
    }
  } else {
    for (let i = 0; i < inputValues.length; i++) {
      outputValues(inputValues[i],inputValues.length);
    }
  }
};


/* Event handlers */
inputList.addEventListener("click", handleListClick);
addGroupBtn.addEventListener("click", handleAddGroupBtnClick);
inputAddValue.addEventListener('click', addTextAreaValue);

//task 2
const button2 = document.getElementById('button2');
const list_item = document.getElementById('list_item');
const input2 = document.getElementById('input2');

list_item.addEventListener('click', (event) => {
const items = document.getElementsByClassName('items');
const target = event.target;
   if (target.tagName === 'LI')
    target.classList.toggle('items_color');
 });

 const createNewElements = () => {
  let item = document.createElement('li');
   if (input2.value !== '') {
     item.innerHTML = input2.value;
     list_item.appendChild(item);
     item.classList.toggle('items')
   } else {
     alert('Заполните пустые поля!');
   }
 }
button2.addEventListener('click', createNewElements);

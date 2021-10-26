const people = (function () {
  let btn;
  let btnX;
  let inpt;
  let arr = [];
  function cacheDom() {
    btn = document.getElementById('btn-add');
    btnX = document.getElementsByClassName('btn-list');
    inpt = document.getElementById('name-inpt');
  }
  function bindEvent() {
    btn.addEventListener('click', addPersonName)
  }
  function init() {
    cacheDom()
    bindEvent()
    inpt.addEventListener('keyup', length)
  }
  function length(){
    if(inpt.value.length > 0){
      btn.disabled = false;
    }
    else{
      btn.disabled = true;
    }
  }
  function render() {
    let arrNew = document.getElementsByClassName('newTr');
    let length = arrNew.length;
    for (let u = 0; u < length; u++) {
      arrNew[0].remove();
    }
    for (let i = 0; i < arr.length; i++) {
      let row = '<tr class ="newTr"><td>' + arr[i] + '</td>' + '<td><input type="button" class="btn-list" value="X" data-index-number="' + i + '"></input></td></tr>';
      let list = document.getElementById('table');
      list.innerHTML = list.innerHTML + row;
    }
    let btnArr = document.getElementsByClassName('btn-list');
    for (let f = 0; f < btnArr.length; f++) {
      btnArr[f].addEventListener('click', delPersonName)
    }
  }
  function addPersonName() {
    let nameVar = document.getElementById('name-inpt').value;
    arr.push(nameVar);
    document.getElementById('name-inpt').value = '';
    length();
    render();
  }

  function delPersonName() {
    let x = this.dataset.indexNumber;
    arr.splice(x, 1);
  render();
  }
  return {
    init: init
  }
})();
people.init();
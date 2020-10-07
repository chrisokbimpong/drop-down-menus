elementArray = document.getElementsByName('cssProperty');
for (index = 0; index < elementArray.length; index++) {
    elementArray[index].addEventListener('change', modifyFunction);
}

function modifyFunction () {
    var value = this.value;
    var idProp = this.id;
    document.getElementById('modify').style.height = value;
    document.getElementById('modify').style.width = value;
    document.getElementById('modify').style.background = value;

    console.log(value);
    console.log(idProp);
}

// function setHeight () {
//     let elements = document.getElementById('height').value;
//     document.getElementById('modify').style.height = elements;
//     // console.log(elements.value);        
// }

// document.getElementById('height').addEventListener('change', setHeight);


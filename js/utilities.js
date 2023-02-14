function inputField(value){
    const inputValue = document.getElementById(value)
    const inputValueString=inputValue.value
    const inputValueIs=parseFloat(inputValueString)
    document.getElementById(value).value=""
    if(isNaN(inputValueIs)){
        alert("provide a valid input")
        return    document.getElementById(value).value=""
    }
  
    return inputValueIs
 

}


function textField(text){
    const getText=document.getElementById(text)
    const innerTextString=getText.innerText
    const textInnerText=parseFloat(innerTextString)
    return textInnerText
}

function setTotal(idName,idValue){
    const  name=document.getElementById(idName);
    name.innerText=idValue
}
function amount(tk){
    const element=document.getElementById(tk)
    const elementString=element.innerText;
    const get=parseFloat(elementString)
    return get
}

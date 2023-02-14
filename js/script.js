document.getElementById("chocolate-btn").addEventListener("click", function(){
    const kitkatInput = inputField("chocolate")
    const kitkat= textField("kitkat")
    const getTotal=kitkat*kitkatInput
    setTotal("chocolate-amount",getTotal)
 })


 document.getElementById("rose-btn").addEventListener("click", function(){
    const roseInput = inputField("rose-input")
    const rose= textField("rose-price")
    const getTotal=rose*roseInput
    setTotal("rose-amount",getTotal)
 })


 document.getElementById("teddy-btn").addEventListener("click", function(){
    const teddyInput = inputField("teddy-input")
    const teddy= textField("teddy-price")
    const getTotal=teddy*teddyInput
    setTotal("teddy-amount",getTotal)
 })

 document.getElementById("diary-btn").addEventListener("click", function(){
    const dairyInput = inputField("diary-input")
    const dairy= textField("diary-price")
    const getTotal=dairy*dairyInput
    setTotal("dairy-amount",getTotal)
 })

 document.getElementById("total-btn").addEventListener("click", function(){
  const first=  amount("chocolate-amount")
  const second=  amount("rose-amount")
  const third=  amount("teddy-amount")
  const four=  amount("dairy-amount")
  total=first+second+third+four;
  setTotal("total-amount",total)
})


 document.getElementById("discount-btn").addEventListener("click", function(){
  const discountInput =  inputField("discount-input")
 if(discountInput==1001){

const totalAmount= textField("total-amount")
const last=totalAmount-totalAmount*0.1
setTotal("last-amount",last)
 }
 
  }


 )
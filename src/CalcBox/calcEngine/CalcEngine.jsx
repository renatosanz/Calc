import { Parser } from "expr-eval"
import valueText from "./ValueNumber"

export default function printNumber(value,sendFun){
  console.log(value)
  if (value==="AC") {
    valueText.val=""
    valueText.brackets=0    
  }else if(value==="=" || value==="Enter"){
    try {
      const parser = new Parser()
      let res = parser.parse(valueText.val)
      valueText.val = res.evaluate()+""
      if(valueText.val.length > 12) {
        valueText.val = valueText.val.substring(0,12)
      }
    } catch (error) {
      valueText.val = "Syntax Error"   
    }
  }else if(value === "⌫" || value === "Backspace"){
    valueText.val = valueText.val.substring(0,valueText.val.length-1) 
  }else if(value==="▶"){
    
  }else{
    if (valueText.val ==="Syntax Error") {
      valueText.val = ""
    }
    valueText.val=valueText.val+value+""
    if (["cos","sin","tan"].includes(value)) {
      valueText.val=valueText.val+"("
    }
    //console.log("pressed: "+value, "screen: "+valueText.val)
  }
  sendFun()
}
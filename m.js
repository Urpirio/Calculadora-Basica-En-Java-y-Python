let section = prompt("Suma(1) resta(2) Calcular el area de un circulo (3) EC.cuadratica (4)")
if (section == 1){
    let num1 = prompt('Ingresa num1')
    let num2 =  prompt ("ingresa num2")

    num1=Number(num1)
    num2=Number(num2)

    let result = num1+num2
    alert(result)

} else {
    if (section ==2){
        let num1 = prompt("Ingresa num1")
        let num2 = prompt("Ingresa num2")

        num1=Number(num1)
        num2=Number(num2)

        let result = num1-num2
        alert(result)
     } else { 
        if (section == 3){
            let radio = prompt ("Ingresa el radio")
            radio=radio**2
            result = 3.14*radio
            alert(result)
            console.log (result)
         
        } else{
            //el error en esta calculadora es que todos los calculos se hacen muy rapido y no por partes//
            if (section ==4 ){
                let x
                let a 
                let b 
                let c 
                 a = prompt ("Ingresa (a)")
                 b = prompt ("Ingresa (b)")
                 c = prompt ("Ingresa (c)")
               let pararaiz = b**2-4*a*c 
                let paradividir = 2*a 
                if (pararaiz < 0){
                    pararaiz=pararaiz*-1

                    raiz=math.sqrt(pararaiz)
                    raiz=raiz*-1
                    x1=-b-raiz/paradividir
                    x2=-b+raiz/paradividir
                    console.log ("x1 = "+x1+" x2 = "+x2)


                } else{
                    raiz=math.sqrt(pararaiz)
                    x1=-b-raiz/paradividir
                    x2=-b+raiz/paradividir
                    console.log ("x1 = "+x1+" x2 = "+x2)
                }
                

            }
                
        }



     }



}

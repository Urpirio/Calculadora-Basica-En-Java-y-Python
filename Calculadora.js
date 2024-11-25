


while (true){
    let section = prompt("Sumar(1) Restar(2) Multiplicar(3) Dividir(4) Radio de un Circulo(5) EC.Cuadratica(6) Cerrar(0)")
    if (section == 1){
        //Suma
        let num = prompt("Ingresa num1:");
        let num2 = prompt("Ingresa num2:");
        num = Number(num);
        num2 = Number(num2);
        let result = num+num2;
        alert("Resultado = " + result);
    }else{
        //Resta
    if(section == 2){
        let num = prompt("Ingresa num1:");
        let num2 = prompt("Ingresa num2:");
        num = Number(num)
        num2 = Number(num2)
        let result = num-num2
        alert("Resultado = " + result);
    }else{
        //Multiplicacion
        if (section == 3){
            let num = prompt("Ingresa num1");
            let num2 = prompt("Ingresa num2");
            num = Number(num);
            num2 = Number(num2);
            let result = num*num2
            alert("Resultado = " + result);
        }else{
            //Division
            if (section == 4){
                let num = prompt("Ingresa num1");
                let num2 = prompt("Ingresa Num2")
                num = Number(num);
                num2 = Number(num2);
                let result = num/num2
                alert("Resultado = " + result);
            }else{
                //Radio de un Circulo
               if (section == 5){
                let circun = prompt("Ingresa el valor de la circunferencia");
                circun = Number(circun);
                let Pi = 3.14;
                let radio = circun/2*Pi;
                alert("Radio = " + radio);
               }
               else{
                //Ecuacion cuadratica
                if (section == 6){
                    let a = prompt("Ingresa A");
                    a = Number(a);
                    let b = prompt("Ingresa B");
                    b = Number(b);
                    let c = prompt("Ingresa C");
                    c = Number(c);
                    let Bcuadrada = b**2;
                    let Pararaiz = Bcuadrada-4*a*c;
                    if (Pararaiz < 0){
                        Pararaiz = Pararaiz*-1;
                        console.log(Pararaiz)
                        let Raiz = Math.sqrt(Pararaiz);
                        console.log(Raiz);
                        Raiz = Raiz*-1;
                        console.log(Raiz);
                        let paraX1 = -b+Raiz;
                        let paraX2 = -b-Raiz;
                        console.log(paraX1);
                        console.log(paraX2);
                        paraA= a*2
                        let x1 = paraX1 / paraA;
                        let x2 = paraX2 / paraA;
                        console.log("X1 = "+x1 +"  X2 = "+x2);
                        alert("Ve a la consola para ver los resultados");
                    }else{
                        let Raiz = Math.sqrt(Pararaiz);
                        let paraX1 = -b + Raiz;
                        let paraX2 = -b - Raiz;
                        paraA = 2*a;
                        let x1 = paraX1/paraA;
                        let x2 = paraX2/paraA;
                        console.log("X1 = "+x1 +"  X2 = "+x2);
                        alert("Ve a la consola para ver los resultados");
                    }
                    
    
                }else{
                    if (section == 0){
                        break
                    }
                }
                    
                }
               }
            }
        }
    }
}




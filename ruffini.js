let Pararufini= prompt("Dime el maximo nivel de exponente(3)")
if (Pararufini == 3){
    let paracalculos = prompt("Cual es el entero mas grande?(6)");
    if (paracalculos ==6){
        let a = prompt("Ingresa A");
        let b = prompt("Ingresa B");
        let c = prompt("Ingresa C");
        let d = prompt("ingresa D");
        a = Number(a);
        b = Number(b);
        c = Number(c);
        d = Number(d);
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        numeros = [a,-a,b,-b,c,-c,d,-d]
        console.log("NUmero[0] = "+numeros[0]);
        console.log("NUmero[1] = "+numeros[1]);
        console.log("NUmero[2] = "+numeros[2]);
        console.log("NUmero[3] = "+numeros[3]);
        console.log("NUmero[4] = "+numeros[4]);
        console.log("NUmero[5] = "+numeros[5]);
        console.log("NUmero[6] = "+numeros[6]);
        console.log("NUmero[7] = "+numeros[7]);
        let M1 = numeros[0]*a;
        let M2 = M1+b;
        let M3 = M2*c;
        let M4 = M3+c;
        let M5 = M4*d;
        let M6 = M5+d;
        if (M6 == 0){
            console.log("X1 = "+numeros[0]);
        }else{
            let M1 = numeros[1]*a;
            let M2 = M1+b;
            let M3 = M2*c;
            let M4 = M3+c;
            let M5 = M4*d;
            let M6 = M5+d;
            if (M6 == 0) {
                console.log("X2 = "+numeros[1]);
            }
            
        }


    }
}
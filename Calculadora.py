print("calculadora");

while True:
  Section = input("Suma(1) Resta(2) Multiplicacion(3) Division(4) Salir(0)");
  Section = int(Section)
  if Section == 1: 
    #Suma
    Num1 = input(" Ingresa Num1 ")
    Num2 = input(" Ingresa Num2 ")
    Num1 = int(Num1)
    Num2 = int(Num2)
    Result = Num1 + Num2
    print("Resultado = ", Result)
  else:
    #Resta
    if Section == 2:
        Num1 = float(input(" Ingresar Num1 "))
        Num2 = float(input(" Ingresar Num2 "))
        Result = Num1 - Num2
        print("Resultado = ",Result)
    else:
        #Multiplicacion
        if Section == 3:
           Num1 = input(" Ingresa Num1 ")
           Num2 = input(" Ingresa NUm2 ")
           Num1 = int(Num1)
           Num2 = int(Num2)
           Result = Num1 * Num2
           print("Resultado = ", Result)
        else:
           #Division
           if Section == 4:
              Num1 = input(" Ingresa Num1 ")
              Num2 = input(" Ingresa Num2 ")
              Num1 = int(Num1)
              Num2 = int(Num2)
              Result = Num1 / Num2
              print("Resultado = ", Result)
           else:
            #Cerrar programa
            if Section == 0:
               break
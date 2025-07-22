# Vamos solicitar como entrada dois números e depois vamos realizar uma operação simples entre eles.

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

operation = input("Digite a operação desejada (+, -, *, /): ")

result = num1 + num2 if operation == "+" else num1 - num2 if operation == "-" else num1 * num2 if operation == "*" else num1 / num2

print("O resultado da operação entre " + str(num1) + " e " + str(num2) + " é: " + str(result))
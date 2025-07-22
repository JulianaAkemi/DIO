# Como entrada, receba um número inteiro e verifique se ele é par ou ímpar

num = int(input("Digite um número: "))

if num % 2 == 0:
	print("O número " + str(num) + " é par")
else:
	print("O número " + str(num) + " é ímpar")
# Vamos testar se uma palavra é um palíndromo

word = input("Digite uma palavra: ")

if word == word[::-1]:
	print("A palavra " + word + " é um palíndromo")
else:
	print("A palavra " + word + " não é um palíndromo")
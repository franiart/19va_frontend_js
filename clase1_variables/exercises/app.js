/* 
### Ejercicio 1:

- Declarar variables con datos de un usuario (user, age, email)
- Mostrar estos datos por consola
- Mostrar el tipo de dato de cada variable por consola

### Ejercicio 2:

- Pedir al usuario sus datos personales (nombre, edad, pais, profesion)
- Mostrar esos datos por consola usando concatenacion
- Mostrar por consola la edad + 10

### Ejercicio 3:

- Tomar las variables del ejercicio 1 y mostrar un texto por consola, por el documento y por un alert (hagan de a uno por vez, comentando y probando) y utilizar template literals.
Recordar: document.write() y alert()

### Ejercicio 4:
- Pedir al usuario dos numeros y mostrar por el documento los resultados de cada calculo aritmetico.
Ejemplo:
El resultado de la suma es: ${resultado}

### Bonus:
- A lo que hiciste en el ejercicio 4, sumale un tercer numero a cada calculo. Mostrar por consola y analizar que paso en cada caso.
Obtuviste los resultados esperados?
*/

//Ejercicio 1
/* const user = 'Tony'
const age = 46
const email = 'tony@gmail.com' */

//console.log(`El usario registrado tiene los siguientes datos. Nombre: ${user}, edad: ${age} y email: ${email}`)
//console.log('Tipo de dato de user:', typeof user, '.Tipo de dato de age:', typeof age, '.Y tipo de dato de email:', typeof email)

//Ejercicio 2
/* const name = prompt("Enter your name")
const age = Number(prompt("Enter your age"))
const country = prompt("Enter your country")
const profession = prompt("Enter your profession")

console.log(`Los datos ingresados son: nombre: ${name}, edad: ${age}, país: ${country} y profesión: ${profession}`)
console.log(`Edad: ${age + 10}`) */

//Ejercicio 3
/* console.log(`Datos de usuario:
Nombre: ${user},
Edad: ${age},
Email: ${email}
`)

document.write(`Datos de usuario:
Nombre: ${user},
Edad: ${age},
Email: ${email}
`)

alert(`Datos de usuario:
Nombre: ${user},
Edad: ${age},
Email: ${email}
`) */

//Ejercicio 4
const num1 = Number(prompt("Enter the first number"))
const num2 = Number(prompt("Enter the second number"))
const num3 = Number(prompt("Enter the third number"))

const sum = num1 + num2 + num3
const rest = num1 - num2 - num3
const mult = num1 * num2 * num3 
const div = num1 / num2 / num3 
const module = num1 % num2 % num3
console.log('El resultado de la suma es: ', sum,
'El resultado de la resta es: ', rest,
'El resultado de la multiplicación es: ', mult,
'El resultado de la división es: ', div,
'El resultado del módulo es: ', module)

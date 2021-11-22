# World Covid 19 view
View data form confirmed cases 

![Image text](https://i.ibb.co/WgbkZ3c/Whats-App-Image-2021-11-20-at-10-42-28.jpg)

# Instructivo.

Ejecutar:
```
npm i 
```

para instalar el modulo y posterior a esto
```
npm start
```

## live demo:
 ==>   [Here](https://sergiocampbell.github.io/covid-19/)

Se consume la API y muestra el dato tanto global como por pais; 
sin embargo, para que no crasheara la pagina, se pone condicional para seleccionar
el pais a mostrar.

## Notes
### Updated: 11/08/21
In this moment the "correctly" run is typing the country name in Englsh and press "F12" or right click then inspect to open the console and see the result.
I´m steel trying to print in DOM the result. Looking for the result in React component.

### Updated: 11/18/21
Fixing the previus problem. Now we add a loader and condition to convert the first letter to capital letter. After that thinking to add a chart too.

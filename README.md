# Angular Heroes

Aplicacion de prueba la cual utiliza [Marvel Comics API](http://developer.marvel.com/) de donde se obtiene toda la informacion necesaria

## Setup

Clona este repositorio en tu computadora y luego corre el comando `npm install` en la terminal para instalar los paquetes necesarios

## Uso

Before you start, you must acquire a developer key from Antes de comenzar tienes que adquirir un 'developer API key' en [Marvel Developer Portal](http://developer.marvel.com/). luego,
cambia la variable `apiKey` en el archivo `src/environments` con tu nueva **public** API key.

```
export const environment = {
  ...
  apiEndpoint: '//gateway.marvel.com/v1/public/',
  apiKey: '<API key publica aqui>'
};
```

Escribe `ng serve` en la consola para comenzar a usar la aplicacion en el puerto http://localhost:4200

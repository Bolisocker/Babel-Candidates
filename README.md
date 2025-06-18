# Prueba Técnica Babel

NPM Workspaces que contiene la aplicación frontal Angular (`frontend`) y el servidor NestJs (`backend`)

## Instalación

En primer lugar, nos aseguramos de tener la versión de Node apropiada. El proyecto se ha creado con la versión LTS actual `v22.16.0`.
Después, ejecutamos el comando para instalar las dependencias:
```
npm install # o npm i
```

## Desarrollo

Para levantar los proyectos en desarrollo basta con ejecutar los respectivos comandos de _start_ para cada uno de los paquetes.
`Frontend`: 
```
npm run start -w frontend
```

`Backend`: 
```
npm run start -w backend 
# para que los cambios se apliquen sin necesidad de volver a arrancar
npm run start:dev -w backend
```

## Pruebas

Se incluye un [fichero Excel](./Test.xls) a modo de ejemplo con el formato que necesita el backend para ser procesado
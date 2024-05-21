# Test de Carga - Documentación

## Indice del proyecto
- []()
- []()
- []()
- []()

# Descripción del proyecto

Este proyecto tiene como propósito medir el tiempo de carga de las aplicaciones web. Utilizando Puppeteer para medir el tiempo de carga de una página web y Node.js para ejecutar en paralelo múltiples navegadores y ver como afecta esto el tiempo de carga. 
Se ejecuta en lotes para optimizar el uso de los recursos del sistema.

## Autores

- **Sergio Camilo Garzón Pérez** - Desarrollo Frontend - **Github:** [@garzonsergio](https://github.com/garzonsergio)

#### Contacto: [scgarzonp@gmail.com](mailito:scgarzonp@gmail.com)

## Requisitos del Sistema


**Node.js:** Versión 14.x o superior. Se utilizan características modernas de JavaScript que requieren al menos esta versión de Node.js.
**NPM (Node Package Manager):** Versión 6.x o superior, o Yarn: Versión 1.22.x o superior, para la gestión de dependencias del proyecto.
**Navegador Web:** El navegador debe instalarse al instalar Puppeteer con NPM.


## Instalación

## Configuración del Entorno de Desarrollo

Antes de comenzar a trabajar en el geoportal, siga los siguientes pasos para configurar su entorno de desarrollo:

### Instalación de Node.js y NPM/Yarn:

Descargue e instale Node.js desde https://nodejs.org/.
NPM se instala automáticamente con Node.js. 

## Instalando proyecto

Clone el repositorio de "geoportal-test" utilizando Git:

```bash
git clone https://github.com/garzonsergio/geoportal-test.git
```

Navegue al directorio del proyecto:

```bash
cd geoportal-test
```

Instalación de Dependencias:

Ejecute el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo y trabajar en la aplicación:

```bash
node index.js
```

## Variables del proyecto

1. Abre el archivo `index.js` en un editor de texto.
2. Modifica la constante `url` con la URL de la página web que deseas probar.
3. Modifica las constantes `totalInstances` y `batchSize` para ajustar el número total de pruebas(navegadores) y el tamaño de los lotes, respectivamente.
4. Guarda y cierra el archivo `index.js`.
5. En tu terminal, navega al directorio del proyecto y ejecuta `node index.js` para iniciar las pruebas.

El script imprimirá el tiempo de carga de la página para cada prueba y notificará cuando cada lote se complete.

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT.
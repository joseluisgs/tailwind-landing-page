# Tailwind - Landing Page

Ejemplo de como crear una página de una compañía usando [TailwindCSS](https://tailwindcss.com/) y personalizando con Sass y Vanilla JS. Automatizado con Gulp. Incluye [Iconify](https://iconify.design/) como grupo de iconos. Además, puede usarse Sass para definir tus estilos con Tailwind. 


[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-Ready-06b6d4)](https://tailwindcss.com/)
[![Gulp](https://img.shields.io/badge/Gulp-%20Ready-cf4647)](https://gulpjs.com/)
[![Saas](https://img.shields.io/badge/Sass-%20Ready-ff69b4)](https://sass-lang.com/)
[![Licence](https://img.shields.io/github/license/joseluisgs/photo-gallery-ionic)](./LICENSE)
![GitHub](https://img.shields.io/github/last-commit/joseluisgs/tailwind-init-gulp)


![Portada](https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg)

- [Tailwind - Landing Page](#tailwind---landing-page)
  - [Acerca de](#acerca-de)
    - [Modo claro](#modo-claro)
    - [Modo oscuro](#modo-oscuro)
  - [Tailwind CSS](#tailwind-css)
    - [Clases utilidad](#clases-utilidad)
    - [Tema personalizado](#tema-personalizado)
  - [BEM CSS](#bem-css)
    - [Elementos de BEM](#elementos-de-bem)
    - [BEM y Sass](#bem-y-sass)
  - [Uso](#uso)
  - [Autor](#autor)
    - [Contacto](#contacto)
  - [Licencia](#licencia)


## Acerca de

Pagina web de una compañía realizada con [TailwindCSS](https://tailwindcss.com/) y cambiar su apariencia con Sass. La intercatividad está realizada con Vanila JS. Para ello se ha creado una serie de tareas automatizadas con [Gulp](https://gulpjs.com/) y se ha añadido como iconos [Iconify](https://iconify.design/). Se ha añadido la opción del modo oscuro.

Para este proyecto me he basado en otro desarrollo realizado donde el framework CSS es Bulma y con ello poder comprar ambos. Lo puedes encontrar en: [Bulma - Landing Page](https://github.com/joseluisgs/bulma-landing-page).

Se ha utilizado nuestra plantilla de automatización de Tailwind que puedes descargar desde: [Tailwind - Init Gulp](https://github.com/joseluisgs/tailwind-init-gulp).

Además el proyecto tiene el tema claro u oscuro, que detecta automáticamente la configuración de tu sistema operativo o preferencias de explorador o opciones personales que le indiques, para que puedas cambiar el tema de tu página web. De la misma manera, se adapta a tres configuraciones mínimas de dispositivo: teléfono móvil, tablet y ordenador.

### Modo claro
<img src="./images/desktop-light.jpg" height="800"/>
<img src="./images/tablet-light.jpg" height="800"/>
<img src="./images/mobile-light.jpg" height="800"/>

### Modo oscuro
<img src="./images/desktop-dark.jpg" height="800"/>
<img src="./images/tablet-dark.jpg" height="800"/>
<img src="./images/mobile-dark.jpg" height="800"/>

## Tailwind CSS
[Tailwind CSS](https://tailwindcss.com/) es un framework CSS de bajo nivel altamente personalizable que le permite crear diseños personalizados. Permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS.


### Clases utilidad
Tailwind permite escribir los estilos por medio de clases que se incluyen dentro del código HTML y que afectan a un aspecto muy concreto y específico de las CSS, por ejemplo, el fondo de un elemento, el color del texto o simplemente el margen por la parte de arriba. Este enfoque se conoce como "Atomic CSS", por aplicarse mediante estilos muy determinados y simples.

### Tema personalizado
En el fichero tailwind.config.js se puede definir un [tema personalizado](https://tailwindcss.com/docs/theme), que se aplica a todas las páginas web. Se muestra un ejemplo donde se han definido fuentes, colores e incluso resolución para los breakpoints y adaptación a los dispositivos.

```js
 darkMode: 'class', // or 'media' or 'class'

  // Extendemos o configuramos el tema
  theme: {
    extend: {
      // Fuentes 
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        sans: ['Avenir', 'sans-serif'], // Probar con Avenir/Ubuntu
        serif: ['Merriweather', 'serif'],
      },

      // Colores
      colors: {
        // O puedo usar colors.
        'primary-light': '#F7F8FC',
        'secondary-light': '#f7f7f7',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',

        'title-light': '#363636',
        'subtitle-light': '#4a4a4a',
        'text-light': '#111827',

        'title-dark': '##f7f7f7',
        'subtitle-dark': '#93C5FD',
        'text-dark': '#F9FAFB',

      },

      // Adaptación a dispositivos. Me baso en los de Bula y TailwindCSS
      // https://tailwindcss.com/docs/responsive-design
      // https://bulma.io/documentation/overview/responsiveness/
      screens: {
        'mobile': '640px',
        // => @media (min-width: 640px) { ... }

        'tablet': '768px',
        // => @media (min-width: 768px) { ... }

        'desktop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'widescreen': '1280px',
        // => @media (min-width: 1280px) { ... }

        'fullhd': '1408px',
        // => @media (min-width: 1408px) { ... }
      }
    },
```
## BEM CSS
[BEM](http://getbem.com/introduction/) nos da la directriz de cómo estructurar nuestro CSS y cómo nombrar adecuadamente a las clases CSS. BEM significa: Block Element Modifier.

En este proyecto hemos dejado unos ejemplos en nuestro CSS y HTMl de cómo podríamos utilizar BEM y Saas, el resto se ha sin seguí esta estructura de CSS para que elijas la que más te guste. Yo lo tengo claro, siempre BEM cuando sea posible.

### Elementos de BEM
- el Bloque no depende de ningún otro elemento. Se puede poner en cualquier parte de la página y no cambia en nada. Para el bloque solo lo escribimos como si fuera una clase normal.
```css
.bloque{
  margin:0 auto;
}
```
- El Elemento sí depende del bloque en el que se inserte. Esto significa que por sí solo, el elemento no tiene un significado particular. El elemento tiene que ser parte de un bloque. Entonces usamos doble guión bajo “__” para separar el nombre del bloque del elemento
```css
.bloque__boton{
  border: 1px solid black;
}
```
- El modificador sería reglas particulares de cada elemento. Los modificadores, son parte del elemento (y del bloque), por lo que para separar el modificador del elemento se usa el doble guión corto “ — ”. Para el ejemplo de los botones de arriba, seria algo asi.
```css
.bloque__boton--rojo{
  background:red;
}
```

### BEM y Sass
Usaremos anidación y selectores padres.
```css
.bloque{
    margin:0 auto;
    &__boton{
        border: 1px solid black;
        &--rojo{
             background:red;
        }
    }
}
```

## Uso

1. Instalar dependencias
```sh
npm install // or yarn install
```
2. Ejecutar modo desarrollo
```sh
npm run dev // or yarn dev
```
3. Generar ficheros de producción
```sh
npm run prod // or yarn prod
```
## Autor

Codificado con :sparkling_heart: por [José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)
[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

### Contacto
<p>
  Cualquier cosa que necesites házmelo saber por si puedo ayudarte 💬.
</p>
<p>
    <a href="https://twitter.com/joseluisgonsan" target="_blank">
        <img src="https://i.imgur.com/U4Uiaef.png" 
    height="30">
    </a> &nbsp;&nbsp;
    <a href="https://github.com/joseluisgs" target="_blank">
        <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" 
    height="30">
    </a> &nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/joseluisgonsan" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" 
    height="30">
    </a>  &nbsp;&nbsp;
    <a href="https://joseluisgs.github.io/" target="_blank">
        <img src="https://joseluisgs.github.io/favicon.png" 
    height="30">
    </a>
</p>

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](./LICENSE) para su uso docente y educativo.


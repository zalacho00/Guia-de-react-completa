<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Guia-de-react-completa

## como iniciar proyecto de react y todas sus funciones

primero que todo debes tener tener visual studio code o algun editor de codigo, abre la carpeta donde quieras hacer el proyecto y presiona (Ctrl+ñ) o busca el boton para abrir una nueva terminal, en la terminal coloca la siguiente linea de codigo:`npm create vite@latest .`, de esta forma el proyecto se empezara a crear y te dara las siguientes opciones: 
<img width="1027" height="565" alt="Captura de pantalla 2026-04-02 120801" src="https://github.com/user-attachments/assets/d36d05db-42f9-4539-bed2-5c2d67856d9e" />

En las opciones que puedes elegir te van a pedir:
1. El nombre del package json, pon el mismo nombre de la carpeta pero todo en minuscula o con un cambio
2. seleccionar el framework: React
3. que lenguaje se va a usar: en este caso js + swc ya que es mas comodo y usado hoy en dia
4. te preguntar si quieres usar el vite 8: no, es mejor no arriesgarse con algo experimental
5. instalar npm e iniciarlo de una vez: si quieres dale que si, si le das no luego en la terminal debes poner `npm install` y despues `npm run dev`
<br>
Con estos pasos ya deberia estarte cargando todo.
<br><br>
<hr>
Una vez ya todo cargado debe salirte algo asi junto con el link del servidor:
<br>
<img width="398" height="263" alt="Captura de pantalla 2026-04-02 120909" src="https://github.com/user-attachments/assets/b4828b17-f791-42c2-a701-44060c28ae91" />

## carpetas fundamentales
Una vez ya halla cargado todo te aparecera algo asi: <br><br>
<img width="224" height="215" alt="Captura de pantalla 2026-04-02 123700" src="https://github.com/user-attachments/assets/17245886-caee-4a57-9a88-e63d84030597" />
<br><br><br>Y hay mas carpetas, pero aqui esta lo importante, en la carpeta public, puedes eliminar el archivo que esta, no lo necesitamos, en la carpeta de `src/assets` borra el contenido pero deja la carpeta, `App.css`borrala, `App.jsx` limpia el contendio del html dejando solas a `<> y </>`, en el `index.css` vacialo pero deja la carpeta, aqui van los estilos globales, `main.jsx` no tocar, dejala asi como esta, esto es lo que monta la app.

### public
En public van archivos estaticos para usarlos en cualquier momento, pueden ser imagenes, fuentes, archivos y se acceden directamente de la raiz `/imagen.png`

### src
Esta es la parte importante donde vive el codigo y vite si las usa, esta es su estructura mas usada:
``` 
src/
├── assets/        # Imágenes, fuentes que SÍ importas en el código
├── components/    # Componentes reutilizables (botones, cards, navbar...)
├── pages/         # Las páginas/vistas de tu app
├── hooks/         # Custom hooks
├── context/       # Contextos de React
├── services/      # Llamadas a APIs
├── App.jsx        # Componente raíz
└── main.jsx       # Punto de entrada, monta la app en el HTML
```

En conclusion debe quedarte algo asi: <br><br>

<img width="352" height="554" alt="Captura de pantalla 2026-04-02 131553" src="https://github.com/user-attachments/assets/01c6de69-6ca5-4d05-89b4-254a1174b58f" />


<hr>

## Enrutamiento de URLS

Para hacer un enrutamiento mas rapido y eficiente vamos a usar la siguiente libreria con la siguiente instalacion en la terminal: `npm i react-router-dom` 
<br><br>
<img width="935" height="176" alt="Captura de pantalla 2026-04-05 214435" src="https://github.com/user-attachments/assets/65119619-d485-4a2b-85c8-a5b51aa5c402" />
<br><br>

Asi debe quedar el `src/main.jsx`:
<br><br>
 <img width="513" height="378" alt="Captura de pantalla 2026-04-05 214645" src="https://github.com/user-attachments/assets/17bb8af5-c00e-4618-8b5a-16d24d34541a" />
<br><br>

Ahora que tenemos listo la configuracion de las rutas, vamos a crear un componente y paginas para ver como funcionan.

### componente nadvar
<br><br>
<img width="1256" height="557" alt="Captura de pantalla 2026-04-05 215736" src="https://github.com/user-attachments/assets/73a354aa-0cb4-428c-ba15-2e0863180d10" />
<br><br>
este nadvar va a estar en todas las paginas que queramos y de este modo nos ahorramos mucho codigo al reutilizarlo aqui como un componente.

Ahora vamos a crear las paginas donde vamos a ver como funciona el sistema de rutas y el componente de nadvar
<br><br>
<img width="1251" height="552" alt="Captura de pantalla 2026-04-05 220558" src="https://github.com/user-attachments/assets/79f43bf5-90b9-4a21-8c3d-149bb853e8a2" />
<br><br>

aqui ya creamos la pagina home que se encuentra en `src/pages/home.jsx`

Ahora crea la pagina de "pagina1" por ejemplo:
<br><br>
<img width="920" height="433" alt="Captura de pantalla 2026-04-05 221123" src="https://github.com/user-attachments/assets/f9af7b8e-6a6f-4982-8021-a079243dd746" />
<br><br>

Y lo mismo para una segunda pagina:
<br><br>
<img width="944" height="443" alt="Captura de pantalla 2026-04-05 221243" src="https://github.com/user-attachments/assets/270878f8-c162-4599-998f-f897f4c07665" />
<br><br>

Y ya por ultimo enrutamos todo a la pagina principal es decir en `src/App.jsx` que quedaria del siguiente modo:
<br><br>
<img width="829" height="420" alt="Captura de pantalla 2026-04-05 222753" src="https://github.com/user-attachments/assets/bcfc8ab2-eacd-4bb2-b896-051648e9b61a" />
<br><br>









>>>>>>> 375885a4619b21c25da20997c6d7747ee7711945

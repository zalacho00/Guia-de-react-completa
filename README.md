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


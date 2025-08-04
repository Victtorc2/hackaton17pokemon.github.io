# hackaton17pokemon.github.io

Pokédex React

Este proyecto es una Pokédex desarrollada con React que consume datos de la [PokeAPI](https://pokeapi.co/). Permite visualizar una lista de los primeros 151 Pokémon, mostrando sus imágenes, tipos y estadísticas principales.



Instrucciones de Instalación y Uso

Sigue estos pasos para instalar y ejecutar el proyecto en un entorno de desarrollo local:

Clonar el repositorio

git clone https://github.com/tu-usuario/pokedex-react.git
cd pokedex-react

Instalar dependencias
npm install

Ejecutar la aplicación en modo desarrollo
npm run dev

Tecnologías Utilizadas
Lenguaje: JavaScript 

Framework principal: React

Gestor de paquetes: npm

Cliente HTTP: fetch API nativa de JavaScript

Estilos: CSS personalizado y Bootstrap

API externa: PokeAPI

Empaquetador: Vite


La organización del proyecto es la siguiente:


pokedex-react/
├── public/                    
│   
├── src/
│   ├── components/            
│   │   ├── PokemonCard.jsx    # Tarjeta que muestra un Pokémon con imagen y nombre
│   │   ├── PokemonDetail.jsx  # Muestra los detalles de un Pokémon seleccionado
│   │   └── Loader.jsx         # Componente opcional de carga/spinner
│   ├── pages/
│   │   └── Home.jsx           # Página principal con listado de Pokémon
│   ├── services/
│   │   └── pokemonService.js  # Funciones para consumir la API
│   ├── styles/
│   │   └── home.css           # Estilos personalizados del proyecto
│   ├── App.jsx                # Componente raíz de la aplicación
│   └── main.jsx               # Punto de entrada para React y Vite
├── .gitignore                 # Archivos que no se deben versionar
├── package.json               # Dependencias y scripts del proyecto
├── vite.config.js             # Configuración del bundler Vite
└── README.md                  # Este archivo
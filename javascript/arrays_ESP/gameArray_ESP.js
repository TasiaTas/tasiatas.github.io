//array of objects for swapping in Game section
const games_es =[
    {
        title: "Mr Erazer's Revenge",
        type: "video",
        btn: {
            label: "¡Jugar!",
            url: "https://wild-claw-studio.itch.io/mr-erazers-revenge"
        },
        src: "https://youtu.be/j9_UikOEKEk",
        paragraphs:[
            "¡Bienvenidos a <span style='font-weight: bold'>Mr Erazer's Revenge</span>!",
            "Desarrollado por el equipo <span style='font-weight: bold'>Wild Claw Studio</span>, trabajé como artista de entornos y de interfaz. Este fue nuestro primer juego creado para la <span style='font-weight: bold'>Game Jam</span> en <span style='font-weight: bold'>Game Gen Virtual Souls</span>. Lamentablemente no llegamos lejos con este juego, pero solo nos motivó a hacer más y mejor.",
            "<span style='font-weight: bold'>¡Está disponible gratis en Itch.io!</span>"
        ]
    },
    {
        title: "Space Combat Rush",
        type: "video",
        btn: {
            label: "¡Jugar!",
            url: "https://tasiatas.itch.io/space-combat-rush"
        },
        src: "https://youtu.be/NWR9QKpArnE",
        paragraphs:[
            "¡Bienvenidos a <span style='font-weight: bold'>Space Combat Rush</span>!",
            "Desarrollado por el equipo <span style='font-weight: bold'>Wild Claw Studio</span>, trabajé como artista de entornos y de interfaz (también programé la función de la UI). Este fue un trabajo de clase que hicimos para aprender a crear juegos en línea.",
            "<span style='font-weight: bold'>¡Está disponible gratis en Itch.io!</span>"
        ]
    },
    {
        title: "SPADE",
        type: "video",
        btn: {
            label: "¡Jugar!",
            url: "https://wild-claw-studio.itch.io/spade"
        },
        src: "https://youtu.be/6Y4vTfMEHeg",
        paragraphs:[
            "¡Bienvenidos a <span style='font-weight: bold'>SPADE</span>!",
            "Desarrollado por el equipo <span style='font-weight: bold'>Wild Claw Studio</span>, con los que trabajé como artista de personajes (Foggy) y programé la función de la UI usando patrones de comportamiento. Se suponía que era solo un trabajo de clase sencillo pero... ¡decidimos seguir desarrollándolo! Así que mantente atento a las novedades.",
            "<span style='font-weight: bold'>¡Demo pequeña disponible en Itch.io gratis!</span>"
        ]
    },
    {
        title: "The Inner Doors",
        type: "video",
        btn: {
            label: "¡Jugar!",
            url: "https://wild-claw-studio.itch.io/the-inner-doors"
        },
        src: "https://youtu.be/ds75GTA6XdU",
        paragraphs:[
            "¡Bienvenidos a <span style='font-weight: bold'>The Inner Doors</span>!",
            "Desarrollado por el equipo <span style='font-weight: bold'>Wild Claw Studio</span>, con los que trabajé como artista del juego y creadora de contenido multimedia. ¡Nos fue tan bien que conseguimos el <span style='font-weight: bold'>3er puesto</span> en la game jam <span style='font-weight: bold'>Game Scholar 2023</span>, una <span style='font-weight: bold'>Mención Honorífica en artes</span> y fuimos al <span style='font-weight: bold'>evento Guerrilla</span> con él!",
            "<span style='font-weight: bold'>¡Disponible gratis en Itch.io!</span>"
        ]
    },
    {
        title: "Space Combat Rush 3D",
        type: "video",
        btn: {
            label: "¡Jugar!",
            url: "https://wild-claw-studio.itch.io/space-combat-rush-3d"
        },
        src: "https://youtu.be/dESIXAj6zrM",
        paragraphs:[
            "¡Bienvenidos a <span style='font-weight: bold'>SCR3D</span>!",
            "Desarrollado por el equipo <span style='font-weight: bold'>Wild Claw Studio</span>, con los que trabajé como artista de interfaz, una de los artistas 3D y creadora de contenido multimedia. Este juego tiene su origen en <span style='font-weight: bold'>SCR</span>, que elegimos rediseñar como un juego multijugador para una asignatura y una competición de clase en la que quedamos en <span style='font-weight: bold'>2º lugar</span>.",
            "¡Nos gustó tanto que queremos rediseñarlo otra vez y convertirlo en un juego oficial! Así que mantente atento a las novedades.",
            "<span style='font-weight: bold'>¡Disponible gratis en Itch.io!</span>"
        ]
    },
    {
        title: "Seek & Sail",
        type: "video",
        btn: {
            label: "¡Jugar!",
            url: "https://store.steampowered.com/app/3129080/Seek__Sail/?l=latam'"
        },
        src: "https://youtu.be/CuJDeyPnrUc",
        paragraphs:[
            "¡Bienvenidos a <span style='font-weight: bold'>Seek & Sail</span>!",
            "Desarrollado por <span style='font-weight: bold'>LamaGlama Games</span>, a los que me uní a principios del 2025 como artista principal. Empecé trabajando de prácticas y decidí quedarme porque... ¿a quién no le gustan los juegos de cartas pirata?",
            "<span style='font-weight: bold'>¡Añádelo ya a tu lista de deseos en Steam!</span>"
        ]
    }
    //ADD NEW IMAGES AT THE END
];

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.games_es = games_es; //subscribe this array to artworksAccess
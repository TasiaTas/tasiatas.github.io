//array of objects for swapping in Game section
const games_ru =[
    {
        title: "Mr Erazer's Revenge",
        type: "video",
        btn: {
            label: "Играть!",
            url: "https://wild-claw-studio.itch.io/mr-erazers-revenge"
        },
        src: "https://youtu.be/j9_UikOEKEk",
        paragraphs:[
            "Добро пожаловать в <span style='font-weight: bold'>Mr Erazer's Revenge</span>!",
            "Разработано командой <span style='font-weight: bold'>Wild Claw Studio</span>. Я работала художником окружения и интерфейса. Это была наша первая игра, созданная для <span style='font-weight: bold'>Game Jam</span> в <span style='font-weight: bold'>Game Gen Virtual Souls</span>. К сожалению, мы не прошли далеко с этой игрой, но это только подтолкнуло нас делать больше и лучше.",
            "<span style='font-weight: bold'>Игра доступна бесплатно на Itch.io!</span>"
        ]
    },
    {
        title: "Space Combat Rush",
        type: "video",
        btn: {
            label: "Играть!",
            url: "https://tasiatas.itch.io/space-combat-rush"
        },
        src: "https://youtu.be/NWR9QKpArnE",
        paragraphs:[
            "Добро пожаловать в <span style='font-weight: bold'>Space Combat Rush</span>!",
            "Разработано командой <span style='font-weight: bold'>Wild Claw Studio</span>. Я работала художником окружения и интерфейса (также программировала функцию интерфейса). Это был учебный проект, чтобы научиться создавать онлайн-игры.",
            "<span style='font-weight: bold'>Игра доступна бесплатно на Itch.io!</span>"
        ]
    },
    {
        title: "SPADE",
        type: "video",
        btn: {
            label: "Играть!",
            url: "https://wild-claw-studio.itch.io/spade"
        },
        src: "https://youtu.be/6Y4vTfMEHeg",
        paragraphs:[
            "Добро пожаловать в <span style='font-weight: bold'>SPADE</span>!",
            "Разработано командой <span style='font-weight: bold'>Wild Claw Studio</span>. Я работала художником персонажей (Foggy) и программировала функцию интерфейса, используя поведенческие шаблоны. Это должно было быть простое учебное задание, но... мы решили продолжить разработку! Следите за обновлениями.",
            "<span style='font-weight: bold'>Небольшая демо доступна бесплатно на Itch.io!</span>"
        ]
    },
    {
        title: "The Inner Doors",
        type: "video",
        btn: {
            label: "Играть!",
            url: "https://wild-claw-studio.itch.io/the-inner-doors"
        },
        src: "https://youtu.be/ds75GTA6XdU",
        paragraphs:[
            "Добро пожаловать в <span style='font-weight: bold'>The Inner Doors</span>!",
            "Разработано командой <span style='font-weight: bold'>Wild Claw Studio</span>. Я работала художником игры и создателем медиа-контента. Мы выступили так хорошо, что получили <span style='font-weight: bold'>3 место</span> в <span style='font-weight: bold'>Game Scholar 2023</span>, <span style='font-weight: bold'>почётное упоминание за арт</span> и даже поехали с игрой на <span style='font-weight: bold'>Guerrilla Event</span>!",
            "<span style='font-weight: bold'>Игра доступна бесплатно на Itch.io!</span>"
        ]
    },
    {
        title: "Space Combat Rush 3D",
        type: "video",
        btn: {
            label: "Играть!",
            url: "https://wild-claw-studio.itch.io/space-combat-rush-3d"
        },
        src: "https://youtu.be/dESIXAj6zrM",
        paragraphs:[
            "Добро пожаловать в <span style='font-weight: bold'>SCR3D</span>!",
            "Разработано командой <span style='font-weight: bold'>Wild Claw Studio</span>. Я работала художником интерфейса, одним из 3D-художников и создателем медиа-контента. Эта игра выросла из <span style='font-weight: bold'>SCR</span>, которую мы выбрали для переработки как многопользовательскую игру для учебного проекта и конкурса, где мы заняли <span style='font-weight: bold'>2 место</span>.",
            "Нам так понравилось, что мы хотим переработать её снова и сделать официальной игрой! Следите за новостями.",
            "<span style='font-weight: bold'>Игра доступна бесплатно на Itch.io!</span>"
        ]
    },
    {
        title: "Seek & Sail",
        type: "video",
        btn: {
            label: "Играть!",
            url: "https://store.steampowered.com/app/3129080/Seek__Sail/?l=latam'"
        },
        src: "https://youtu.be/CuJDeyPnrUc",
        paragraphs:[
            "Добро пожаловать в <span style='font-weight: bold'>Seek & Sail</span>!",
            "Разработано <span style='font-weight: bold'>LamaGlama Games</span>. Я присоединилась к ним в начале 2025 года как главный художник. Начала работать у них на стажировке и решила остаться, потому что... ну кто не любит пиратские карточные игры?",
            "<span style='font-weight: bold'>Добавьте игру в список желаемого на Steam!</span>"
        ]
    }
    //ADD NEW IMAGES AT THE END
];

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.games_ru = games_ru; //subscribe this array to artworksAccess
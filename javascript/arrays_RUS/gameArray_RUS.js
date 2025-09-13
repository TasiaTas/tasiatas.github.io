//array of objects for swapping in Game section
const games_ru =[
    {
        title: "Обнимающееся дерево",
        type: "image",
        src: "../assets/imgPlaceholder/premium_photo-1661964435855-829453686582.jpeg",
        paragraphs:[
            "WE ARE IN GAMEEEEEES",
            "Hello everyone muahahahahahahaha.",
            "aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaa  aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa"
        ]
    },
    {
        title: "Люди в лесу",
        type: "image",
        src: "../assets/imgPlaceholder/kv_environment.webp",
        paragraphs:[
            "WE ARE IN GAMEEEEEES",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Рубка деревьев",
        type: "image",
        src: "../assets/imgPlaceholder/images%20(1).jpeg",
        paragraphs:[
            "WE ARE IN GAMEEEEEES",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Мокрый лес",
        type: "video",
        src: "https://youtu.be/ds75GTA6XdU",
        paragraphs:[
            "WE ARE IN GAMEEEEEES",
            "Hello everyone muahahahahahahaha."
        ]
    },
    //ADD NEW IMAGES AT THE END
];

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.games_ru = games_ru; //subscribe this array to artworksAccess
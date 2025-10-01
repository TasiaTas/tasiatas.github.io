//array of objects for swapping in Game section
const games_en =[
    {
        title: "Mr Erazer's Revenge",
        type: "video",
        btn: {
            label: "Play!",
            url: "https://wild-claw-studio.itch.io/mr-erazers-revenge"
        },
        src: "https://youtu.be/j9_UikOEKEk",
        paragraphs:[
            "Welcome everyone to <span style='font-weight: bold'>Mr Erazer's Revenge</span>!",
            "Developed by team <span style='font-weight: bold'Wild Claw Studio</span>, I worked as the UI and environment artist. This was our first ever game created for the <span style='font-weight: bold'>Game Jam</span> in <span style='font-weight: bold'>Game Gen Virtual Souls</span>. Sadly, we didn't get far with this game but it only fueled us to do more and better.",
            "<span style='font-weight: bold'>It is available to play for free on Itch.io!</span>"
        ]
    },
    {
        title: "Space Combat Rush",
        type: "video",
        btn: {
            label: "Play!",
            url: "https://tasiatas.itch.io/space-combat-rush"
        },
        src: "https://youtu.be/NWR9QKpArnE",
        paragraphs:[
            "Welcome everyone to <span style='font-weight: bold'>Space Combat Rush</span>!",
            "Developed by team <span style='font-weight: bold'Wild Claw Studio</span>, I worked as the UI and environment artist (I also programmed the UI function). This was a class assignment we did to learn how to do online games.",
            "<span style='font-weight: bold'>It is available to play for free on Itch.io!</span>"
        ]
    },
    {
        title: "SPADE",
        type: "video",
        btn: {
            label: "Play!",
            url: "https://wild-claw-studio.itch.io/spade"
        },
        src: "https://youtu.be/6Y4vTfMEHeg",
        paragraphs:[
            "Welcome everyone to <span style='font-weight: bold'>SPADE</span>!",
            "Developed by team <span style='font-weight: bold'Wild Claw Studio</span>, I worked as the character artist (Foggy) and programmed the UI function using behavioural patterns. It was supposed to be a simple class assignment but...we decided to continue developing it! So stay tuned for updated!",
            "<span style='font-weight: bold'>Small demo is available for free on Itch.io!</span>"
        ]
    },
    {
        title: "The Inner Doors",
        type: "video",
        btn: {
            label: "Play!",
            url: "https://wild-claw-studio.itch.io/the-inner-doors"
        },
        src: "https://youtu.be/ds75GTA6XdU",
        paragraphs:[
            "Welcome everyone to <span style='font-weight: bold'>The Inner Doors</span>!",
            "Developed by team <span style='font-weight: bold'Wild Claw Studio</span>, I worked as the game artist and media content creator. We did so well that we got <span style='font-weight: bold'>3rd place</span>, a <span style='font-weight: bold'>Honorable Mention in arts</span> and went to <span style='font-weight: bold'>Guerrilla Event</span> with it!",
            "<span style='font-weight: bold'>It is available to play for free on Itch.io!</span>"
        ]
    },
    {
        title: "Space Combat Rush 3D",
        type: "video",
        btn: {
            label: "Play!",
            url: "https://wild-claw-studio.itch.io/space-combat-rush-3d"
        },
        src: "https://youtu.be/dESIXAj6zrM",
        paragraphs:[
            "Welcome everyone to <span style='font-weight: bold'>SCR3D</span>!",
            "Developed by team <span style='font-weight: bold'Wild Claw Studio</span>, I worked as the UI artist, one of the 3D artists and media content creator. This game originates in <span style='font-weight: bold'>SCR</span> which we chose to redesign for a multiplayer game assignment and class competition in which we came in <span style='font-weight: bold'>2nd place!</span>.",
            "We came to love it so much that we want to redesign it again and make it an official game! So stay tuned for updates!",
            "<span style='font-weight: bold'>It is available to play for free on Itch.io!</span>"
        ]
    },
    {
        title: "Seek & Sail",
        type: "video",
        btn: {
            label: "Play!",
            url: "https://store.steampowered.com/app/3129080/Seek__Sail/?l=latam'"
        },
        src: "https://youtu.be/CuJDeyPnrUc",
        paragraphs:[
            "Welcome everyone to <span style='font-weight: bold'>Seek & Sail</span>!",
            "Developed by <span style='font-weight: bold'>LamaGlama Games</span>, I joied them at the beginning of 2025 as the main artist. I started working with them in an internship and chose to stay because... who doesn't like pirate card games?",
            "<span style='font-weight: bold'>Wishlist now on Steam!</span>"
        ]
    },
    //ADD NEW IMAGES AT THE END
];

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.games_en = games_en; //subscribe this array to artworksAccess
//array of objects for swapping in 3D section
const artworks3D_es =[
    {
        title: "Abrazando árbol",
        type: "image",
        src: "../assets/imgPlaceholder/premium_photo-1661964435855-829453686582.jpeg",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha.",
            "aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaa  aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa"
        ]
    },
    {
        title: "Gente en el bosque",
        type: "image",
        src: "../assets/imgPlaceholder/kv_environment.webp",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Cortando árbol",
        type: "image",
        src: "../assets/imgPlaceholder/images%20(1).jpeg",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Selva",
        type: "image",
        src: "../assets/imgPlaceholder/images.jpeg",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Sujetando árbol en la mano",
        type: "image",
        src: "../assets/imgPlaceholder/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.webp",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha."
        ]
    },
    //ADD NEW IMAGES AT THE END
];

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.artworks3D_es = artworks3D_es; //subscribe this array to artworksAccess
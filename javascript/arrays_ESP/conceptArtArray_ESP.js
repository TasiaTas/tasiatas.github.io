//array of objects for swapping in Concept Art section
const artworksConcept =[
    {
        title: "Abrazando árbol",
        type: "image",
        src: "assets/imgPlaceholder/premium_photo-1661964435855-829453686582.jpeg",
        paragraphs:[
            "Primera frase para revisar idioma funcinal",
            "Hello everyone muahahahahahahaha.",
            "aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaa  aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa"
        ]
    },
    {
        title: "Gente en el bosque",
        type: "image",
        src: "assets/imgPlaceholder/kv_environment.webp",
        paragraphs:[
            "Primera frase para revisar idioma funcinal",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Cortando árbol",
        type: "image",
        src: "assets/imgPlaceholder/images%20(1).jpeg",
        paragraphs:[
            "Primera frase para revisar idioma funcinal",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Selva",
        type: "image",
        src: "assets/imgPlaceholder/images.jpeg",
        paragraphs:[
            "Primera frase para revisar idioma funcinal",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Sujetando manos alrededor del árbol",
        type: "image",
        src: "../assets/imgPlaceholder/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.webp",
        paragraphs:[
            "Primera frase para revisar idioma funcinal",
            "Hello everyone muahahahahahahaha."
        ]
    },
    //ADD NEW IMAGES AT THE END
];

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.artworksConcept = artworksConcept; //subscribe this array to artworksAccess
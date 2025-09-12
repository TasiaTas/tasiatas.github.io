//array of objects for swapping in 3D section
const artworks3D =[
    {
        title: "Hugging tree",
        type: "image",
        src: "../assets/imgPlaceholder/premium_photo-1661964435855-829453686582.jpeg",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha.",
            "aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaa  aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa"
        ]
    },
    {
        title: "People in forest",
        type: "image",
        src: "../assets/imgPlaceholder/kv_environment.webp",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Cutting tree",
        type: "image",
        src: "../assets/imgPlaceholder/images%20(1).jpeg",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Wet forest",
        type: "image",
        src: "../assets/imgPlaceholder/images.jpeg",
        paragraphs:[
            "WE ARE IN 3D",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Hand holding tree",
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
window.artworksAccess.artworks3D = artworks3D; //subscribe this array to artworksAccess
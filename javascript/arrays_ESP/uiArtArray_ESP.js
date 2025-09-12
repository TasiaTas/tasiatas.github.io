//array of objects for swapping in UI section
const artworksUI =[
    {
        title: "Bebé foca",
        type: "image",
        src: "../assets/imgPlaceholder/SvUZne7ysWkUNQU65UWdcJ.jpg",
        paragraphs:[
            "Primera descripción de la imagen.",
            "Hello everyone muahahahahahahaha.",
            "aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaa  aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa"
        ]
    },
    {
        title: "Ajolote",
        type: "image",
        src: "../assets/imgPlaceholder/bigstock-193965259.jpg",
        paragraphs:[
            "Primera descripción de la imagen.",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Ballena",
        type: "image",
        src: "../assets/imgPlaceholder/images.jpg",
        paragraphs:[
            "Primera descripción de la imagen.",
            "Hello everyone muahahahahahahaha."
        ]
    },
    {
        title: "Foca",
        type: "image",
        src: "../assets/imgPlaceholder/9j76svsMfJ2SAoj8FsFyuk.jpg",
        paragraphs:[
            "First image             \"Primera descripción de la imagen.\",\n to see if it works.",
            "Hello everyone muahahahahahahaha."
        ]
    },
    //ADD NEW IMAGES AT THE END
]

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.artworksUI = artworksUI; //subscribe this array to artworksAccess
//array of objects for swapping in UI section
const artworksUI =[
    {
        title: "Baby seal",
        type: "image",
        src: "../assets/imgPlaceholder/SvUZne7ysWkUNQU65UWdcJ.jpg",
        paragraphs:[
            "First image description to see if it works.",
            "Fuck everyone muahahahahahahaha.",
            "aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaa  aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa"
        ]
    },
    {
        title: "Axolot",
        type: "image",
        src: "../assets/imgPlaceholder/bigstock-193965259.jpg",
        paragraphs:[
            "First image description to see if it works.",
            "Fuck everyone muahahahahahahaha."
        ]
    },
    {
        title: "Beluga whale",
        type: "image",
        src: "../assets/imgPlaceholder/images.jpg",
        paragraphs:[
            "First image description to see if it works.",
            "Fuck everyone muahahahahahahaha."
        ]
    },
    {
        title: "Seal",
        type: "image",
        src: "../assets/imgPlaceholder/9j76svsMfJ2SAoj8FsFyuk.jpg",
        paragraphs:[
            "First image description to see if it works.",
            "Fuck everyone muahahahahahahaha."
        ]
    },
    //ADD NEW IMAGES AT THE END
]

//Make this array visible globally by referencing it inside artworksAccess so we can reuse the same js code (modal.js) independent to the html we're at
window.artworksAccess = window.artworksAccess || {}; //Check if artworksAccess is created to use it and, if not, create it empty
window.artworksAccess.artworksUI = artworksUI; //subscribe this array to artworksAccess
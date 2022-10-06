//*In this file we stores all card data in Array => object format
//!Here we add another property 'id'. Because in react Each child in a list should have a unique "key" prop.

const CardData = [
    {
        id: 1,
        Title:"Nature Beach",
        imgLink:'https://source.unsplash.com/300x300/?nature,beach',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        link: 'https://www.google.com/search?q=nature,beach',
    },

    {
        id: 2,
        Title:"Nature Jungle",
        imgLink:'https://source.unsplash.com/300x300/?nature,jungle',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.google.com/search?q=nature,jungle',
    },

    {
        id: 3,
        Title:"Nature Animal",
        imgLink:'https://source.unsplash.com/300x300/?nature,animal',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.google.com/search?q=nature,animal',
    },

    {
        id: 4,
        Title:"Nature Flower",
        imgLink:'https://source.unsplash.com/300x300/?nature,flower',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.google.com/search?q=nature,flower',
    },

    {
        id: 5,
        Title:"Mobile Technology",
        imgLink:'https://source.unsplash.com/300x300/?techology,mobile',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.google.com/search?q=techology,mobile'
    },

    {
        id: 6,
        Title:"Computer Technology",
        imgLink:'https://source.unsplash.com/300x300/?techology,computer',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.google.com/search?q=techology,computer'
    },

    {
        id: 7,
        Title:"Automobile Technology",
        imgLink:'https://source.unsplash.com/300x300/?techology,automobile',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.google.com/search?q=techology,automobile'
    }
]


//Here we export cardData as default.
export default CardData;
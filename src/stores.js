import {writable} from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "lorem ipsum dolor sit amet consectetur adispicing elit. consequntur vel vitae commodi alias valuptatem est volutatum ipsa quae."
    },
    {
        id: 2,
        rating: 9,
        text: "lorem ipsum dolor sit amet consectetur adispicing elit. consequntur vel vitae commodi alias valuptatem est volutatum ipsa quae."
    },
    {
        id: 3,
        rating: 8,
        text: "lorem ipsum dolor sit amet consectetur adispicing elit. consequntur vel vitae commodi alias valuptatem est volutatum ipsa quae."
    },
])
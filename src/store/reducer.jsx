import user from '../assets/user.png';

const initialState = {
    faqs: [
        {
            ques: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text?",
            ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            open: false
        },
        {
            ques: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text?",
            ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            open: false
        },
        {
            ques: "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
            ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            open: false
        }
    ],

    batches: [
        {
            batchName: 'Khar, Mumbai',
            batchAddr: '3rd, Gabbana House, 15th Road, Oppsite to Casper Mumbai Properties, Khar West, Mumbai- 400052',
            mwfBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            sundayBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            open: false
        },
        {
            batchName: 'Khar, Mumbai',
            batchAddr: '3rd, Gabbana House, 15th Road, Oppsite to Casper Mumbai Properties, Khar West, Mumbai- 400052',
            mwfBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            sundayBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            open: false
        },
        {
            batchName: 'Khar, Mumbai',
            batchAddr: '3rd, Gabbana House, 15th Road, Oppsite to Casper Mumbai Properties, Khar West, Mumbai- 400052',
            mwfBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            sundayBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            open: false
        },
        {
            batchName: 'Khar, Mumbai',
            batchAddr: '3rd, Gabbana House, 15th Road, Oppsite to Casper Mumbai Properties, Khar West, Mumbai- 400052',
            mwfBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            sundayBatch: [
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am',
                '07:00 am - 08:00 am'                                
            ],
            open: false
        }
    ],

    reviews: [
        {id: 1, imgUrl:'', uname: 'Martha Young', rating: '3', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', date: '1 day ago'},
        {id: 1, imgUrl:'', uname: 'Martha Young', rating: '3', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', date: '2 day ago'},
        {id: 1, imgUrl:'', uname: 'Martha Young', rating: '4', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', date: '3 day ago'},
        {id: 1, imgUrl:'', uname: 'Martha Young', rating: '1', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', date: '1 day ago'}
    ]
}
 
const reducer = (state = initialState, action) => {
    if(action.type == 'toggle') {
        return {
            ...state,
            [action.accName]: action.payload
        } 
    }

    return state;    
}
 
export default reducer;

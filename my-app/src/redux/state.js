const ADD_POST = 'ADD_POST',
    ADD_POST_TEXT = 'ADD_POST_TEXT',
    SEND_MESSAGE = 'SEND_MESSAGE',
    ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT';

//Data
let store = {
    _state: {
        correspond: {
            dialogs: [
                { id: 0, name: 'Dimych' },
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Victor' },
                { id: 5, name: 'Valera' }
            ],
            messages: [
                { id: 0, messages: 'Hi' },
                { id: 1, messages: 'How is your it-kamasutra' },
                { id: 2, messages: 'Yo' },
                { id: 3, messages: "I'm good" },
                { id: 4, messages: 'How is your live' },
                { id: 5, messages: 'Terrible' }
            ]
        },
        postData: [
            { id: 0, message: 'Hi, how are you?', likes: 31 },
            { id: 1, message: "It's my first post", likes: 7 },
            { id: 2, message: 'Yo, dude!', likes: 0 }
        ],
        friends: [
            { id: 1, name: 'Serega' },
            { id: 2, name: 'AVlad' },
            { id: 3, name: 'Miha' },
        ],
        areaText: '',
        messageText: ''
    },
    _rerenderEntireTree() {
        console.log('State chenged');
    },
    _writeHi() {
        console.log('Hi');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    subscribe2(observer) {
        this._writeHi = observer;
    },
    // addText(area) {
    //     this._state.areaText = area.current.value;

    //     this._rerenderEntireTree();
    // },
    // addPost(newPostData) {
    //     let newPost = {
    //         id: this._state.friends.length,
    //         message: newPostData.current.value,
    //         likes: 0
    //     }

    //     this._state.postData.push(newPost);
    //     this._state.areaText = '';

    //     this._rerenderEntireTree();
    // },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.friends.length,
                message: action.newPostData.current.value,
                likes: 0
            }

            this._state.postData.push(newPost);
            this._state.areaText = '';

            this._rerenderEntireTree();
        } else if (action.type === ADD_POST_TEXT) {
            this._state.areaText = action.areaText.current.value;
            this._rerenderEntireTree();
        }
        
        else if(action.type === SEND_MESSAGE) {
            let sender = {
                    id: this._state.correspond.dialogs.length,
                    name: 'Dimych'
                };
            let letter = {
                    id: this._state.correspond.messages.length,
                    messages: action.newMessageData.current.value
                }
            this._state.correspond.messages.push(letter);
            this._state.correspond.dialogs.push(sender);
            console.log(this._state.messageText);
            console.log(this._state.correspond.messages);
            this._state.messageText = '';
            this._rerenderEntireTree();
        } else if(action.type === ADD_MESSAGE_TEXT) {
            this._state.messageText = action.messageText.current.value;
            this._rerenderEntireTree();
        }
    }
};

export const addPostActionCreator = (value) => ({
    type: ADD_POST,
    newPostData: value
});
export const addTextActionCreator = (value) => ({
    type: ADD_POST_TEXT,
    areaText: value
});
export const sendMessageActionCreator = (value) => ({
    type: SEND_MESSAGE,
    newMessageData: value
});
export const addMessageTextActionCreator = (value) => ({
    type: ADD_MESSAGE_TEXT,
    messageText: value
});


export default store;
window.store = store;
import {ActionsTypes, idialogsPage, SendMessageType, updateNewMessageBodyType} from "./store";

const updateNewMessageBody = 'update-New-Message-Body';
const SendMessage = 'Send-Message';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yoo'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'Yoo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimach'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Nadzeika'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: idialogsPage = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case updateNewMessageBody: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SendMessage: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };
        }
        default:
            return state;
    }
}


export let sendMessageCreator = (): SendMessageType => {
    return {
        type: SendMessage
    }
}
export let updateNewMessageBodyCreator = (body: string): updateNewMessageBodyType => {
    return {
        type: updateNewMessageBody,
        body: body
    }
}

export default dialogsReducer;

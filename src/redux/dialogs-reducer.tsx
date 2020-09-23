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
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy
        }
        case SendMessage: {
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...stateCopy.messages]
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;
        }
        default:
            let stateCopy = {...state}
            return stateCopy;
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
//======================
// import {ActionsTypes, istate} from "./state";
//
// const updateNewMessageBody = 'update-New-Message-Body';
// const SendMessage = 'Send-Message';
//
// const dialogsReducer = (state: istate, action: ActionsTypes) => {
//     if (action.type == updateNewMessageBody) {
//         state.dialogsPage.newMessageBody = action.body
//     } else if (action.type = SendMessage) {
//         let body = state.dialogsPage.newMessageBody;
//         state.dialogsPage.newMessageBody = '';
//         state.dialogsPage.messages.push({id: 6, message: body});
//     }
//     return state
// }
//
// export default dialogsReducer;
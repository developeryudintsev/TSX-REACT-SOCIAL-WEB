import {ActionsTypes, idialogsPage, SendMessageType, updateNewMessageBodyType} from "./store";

const updateNewMessageBody = 'update-New-Message-Body';
const SendMessage = 'Send-Message';

const dialogsReducer = (state: idialogsPage, action: ActionsTypes) => {
    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageBody = action.body;
            return state
        case SendMessage:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
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
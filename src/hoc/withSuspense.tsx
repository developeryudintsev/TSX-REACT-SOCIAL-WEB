import React from 'react';
import {Preloader} from "../components/common/Preloader/Preloader";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import ProfileContainer from "../components/Profile/ProfileContainer";

export const WithSuspence = (title:string) => {

    return<React.Suspense fallback={<Preloader/>} >

            {title==='DialogsContainer'?<DialogsContainer/>:<ProfileContainer/>}
        </React.Suspense>
}

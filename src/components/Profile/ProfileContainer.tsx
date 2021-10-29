import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    profileType, savePhoto,
    updateStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {savePhotoSuccessType} from "../../redux/store";
type PathParamsType = {
    userId: any
}
export type initialProfileStateType = MapStateToPropsType & MapDispatchPropsType;
export type RouteComponentPropsType = RouteComponentProps<PathParamsType> & initialProfileStateType

export type MapStateToPropsType = {
    profile: profileType
    status: string
    isAuth:boolean
    autorisedUserId:number | null,
}
export type MapDispatchPropsType = {
    getUserProfile: (userId: any) => void
    getStatus: (userId: any) => void
    updateStatus: (status:string) => void
    savePhoto:(photos:string)=>void
}

//проблема: после того как мы вылогинились мы остаемся в профиле
//вместо того чтобы редиректиться в форму
class ProfileContainer extends React.Component<RouteComponentPropsType> {
    refereshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId =this.props.autorisedUserId;
            if(!userId){
                //но так мы вмешиваемся во внутр. функционал->
                //жизненный цикл
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
}
    componentDidMount() {
     this.refereshProfile()
    }
    componentDidUpdate() {
        if(this.props.match.params.userId){
            this.refereshProfile()
        }
    }
    render() {
                 return (
            <div>
                <Profile {...this.props}
                    owner={this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    isAuth:state.auth.isAuth,//зарегистрирован ли я?
    autorisedUserId:state.auth.id,//берем наш ID
    // savePhoto:state.profilePage.profile.savePhoto
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile,getStatus,updateStatus,savePhoto}),
    withRouter)(ProfileContainer)




import React from 'react';
import {InjectedFormProps} from "redux-form";
import {Field, reduxForm} from "redux-form";
import styles from "../components/common/FormsControls/FormsControls.module.css";
import {Input} from "../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utilites/validators/validators";
import {connect} from "react-redux";
import {initialStateType, login} from "../redux/auth-reducer";
import {Redirect} from "react-router";
import {StoreType} from "../redux/store";
import {AppStateType} from "../redux/redux-store";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}  validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       type={"password"} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = (props:any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
         return  <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps=(state:AppStateType)=>({
    isAuth:state.auth.isAuth
})
export default  connect(mapStateToProps,{login}) (Login);

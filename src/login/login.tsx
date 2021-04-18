import React from 'react';
import {InjectedFormProps} from "redux-form";
import {Field, reduxForm} from "redux-form";
import styles from "../components/common/FormsControls/FormsControls.module.css";
import {Input} from "../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utilites/validators/validators";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean,
}
let maxLength20=maxLengthCreator(20)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input}  validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}  validate={[required,maxLength20]}/>
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
export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;

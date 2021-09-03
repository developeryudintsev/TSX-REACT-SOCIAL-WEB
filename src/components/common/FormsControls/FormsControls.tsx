import React, {ChangeEvent} from 'react';
import styles from './FormsControls.module.css'

const FormControl=({input, meta, child, ...props}: any)=>{
    //child-это то что мы можем передать
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

//создаем Textarea для Dialogs
export const Textarea = (props: any) => {
   const {input, meta, ...restProps}=props  //restProps-остаточныйПропс (выдуманное название)
           return <FormControl {...props}><textarea {...input} {...meta} {...props}/></FormControl>
    // <FormControl><передаем child ></FormControl>
}

//создаем Input для login
export const Input = (props: any) => {
    const {input, meta, ...restProps}=props  //restProps-остаточныйПропс (выдуманное название)
    return <FormControl {...props}><input {...input} {...meta} {...props}/></FormControl>
    // <FormControl><передаем child ></FormControl>
}






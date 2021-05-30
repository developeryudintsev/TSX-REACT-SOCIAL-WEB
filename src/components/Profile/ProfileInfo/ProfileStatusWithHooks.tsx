import React, {ChangeEvent, useState} from 'react';

type propsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: propsType) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    const activateMode = () => {
        setEditMode(true)
    }
    const deActivateMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={activateMode}>
                       {props.status || '---'}
                   </span>
                : <input  onChange={onStatusChange}
                          onBlur={deActivateMode}
                          autoFocus={true}
                          value={status}
                />
            }
        </div>
    )
}





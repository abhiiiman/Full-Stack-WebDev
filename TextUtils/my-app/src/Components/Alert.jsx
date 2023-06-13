import React from 'react'

const Alert = (props) => {
    return (
        props.alertText && <div class={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alertText.type}</strong> : {props.alertText.msg}
            <button type="button" class="btn btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
        </div>
    )
}

export default Alert
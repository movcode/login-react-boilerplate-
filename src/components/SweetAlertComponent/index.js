import React from 'react';
import SweetAlert from 'sweetalert2-react'

export default props => ({

    error: (title, message, exec) => (
        <div>
            <SweetAlert
                show={true}
                title={title}
                text={message}
                type="error"
                onConfirm={() => exec}
            />
        </div>),


    success: (title, message, exec) => (
        <div>
            <SweetAlert
                show={true}
                title={title}
                text={message}
                type="success"
                onConfirm={() => exec}
            />
        </div>)
})
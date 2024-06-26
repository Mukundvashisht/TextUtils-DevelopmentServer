import React from 'react'

function Alert({ alert }) {



    return (
        // 2 ways to apply contions here 👇    // Both of the approaches are works same
        // alert === null ? ' ' :           // Either this approach using {ternary operators}
        alert &&                            // Or this conditional approach which includes prop(name of the prop) and This(&&)

        <>
            <div className="alert m-0 p-2 d-flex justify-content-between alert-warning alert-dismissible fade show z-1 position-absolute w-100" id='alert' role="alert">
                {alert.type}: {alert.msg}
                {/* <button type="button" className="btn-close p-1 position-relative" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </>
    )
}

export default Alert

function formartEmail(email, fullname, message, contact){
    return (
        `<div>
           
            <p>${email}</p>
            <p>${fullname}</p>
            <p>${message}</p>
            <p>${contact}</p>
        </div>`
    )
}

module.exports = formartEmail;
import React from 'react'

const User = ({content, action}) => {
    return (
        <li onClick={action}>
            {content}
        </li>
    )
}

export default User
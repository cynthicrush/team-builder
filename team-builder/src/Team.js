import React from 'react';

export default function Team(props) {
    const {info} = props;
    // console.log('info:', info);
    return(
        <div className="members">
            <h2>{info.name}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
    )
}
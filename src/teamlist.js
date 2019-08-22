import React from 'react';

import Form from './form'

const TeamList = props => {
    return (
        <div>
            {props.teamList.map(person => {
                return (
                    <div key = {person.id}>
                    <h2>{person.name}</h2>
                    <h3>{person.role}</h3>
                    <p>{person.email}</p>

                    </div>
                )
            })}

        </div>
    )
}

export default TeamList;
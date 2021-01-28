import React from 'react'

const Item = props => {
    return (
        <li className="main__item">
            <label htmlFor={`checkbox-${props.id}`} className={`main__name ${props.setDo && `completed`}`}>{props.nameIn}</label>
            <input onChange={e => e.target.checked ? props.setCompleted({id: props.id, name: props.nameIn}) : props.setDo({id: props.id, name: props.nameIn})} id={`checkbox-${props.id}`} className="main__checkbox" type="checkbox" checked={!!props.setDo} />
        </li>
    )
}

export default Item
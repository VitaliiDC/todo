import React, {useRef, useState} from 'react'
import Item from './item/item'

const Main = (props) => {

    let index = props.do.length + props.completed.length // last id

    // REFS
    const input = useRef(null)

    // MAPS
    const doMap = props.do.map(e => <Item key={e.id} id={e.id} nameIn={e.name} setCompleted={props.setCompleted} />)
    const completedMap = props.completed.map(e => <Item key={e.id} id={e.id} nameIn={e.name} setDo={props.setDo} />)

    // STATE
    const [add, setAdd] = useState(false)

    // SHOW HIDDEN INPUT
    const show = () => {
        setAdd(true)
        setTimeout(() => {
            input.current.focus()
        }, 300)
    }

    // HIDE INPUT
    const hide = () => {
        setAdd(false)
    }

    // ADD TASK
    const addTask = (input) => {
        props.addDo({id: index, name: input.current.value})
        input.current.value = ''
    }

    // ON KEY DOWN
    const keyDown = (e, input) => {
        if(e.code === 'Enter'){
            addTask(input)
        }
    }

    return (
        <div className="main">
            <div className="container">
                <div className="main__body">
                    <div className="main__title">All Tasks</div>
                    <hr/>
                    <div className="main__tasks">
                        <ul className="main__list">
                            {doMap}
                            {completedMap}
                        </ul>
                    </div>
                    <div className="main__input">
                        <div className={`d-flex ${add && 'long'}`}>
                            <input type="text" ref={input} onBlur={() => setTimeout(hide, 300)} onKeyDown={e => keyDown(e, input)} />
                            <button onClick={() => add ? addTask(input) : show()}><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
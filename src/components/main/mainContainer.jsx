import React from 'react'
import {connect} from 'react-redux'
import Component from './main'
import {setDo, setCompleted, addDo} from './../../redux/main'
import './main.css'

const Main = (props) => {
    return <Component {...props} />
}

const mapState = (state) => {
    return ({
        do: state.main.do,
        completed: state.main.completed
    })
}

const mapDispatch = {setDo, setCompleted, addDo}

export default connect(mapState, mapDispatch)(Main)
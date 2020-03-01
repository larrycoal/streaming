import React from 'react'
import { Router, Route, } from 'react-router-dom'
import Header from './Header'
import stream from './Streams/stream'
import streamCreate from './Streams/streamCreate'
import Edit from './Streams/Edit'
import Delete from './Streams/Delete'
import history from './History'
import StreamShow from './Streams/StreamShow'



const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <Route path='/' exact component={stream} />
                <Route path='/new' exact component={streamCreate} />
                <Route path='/edit/:id' exact component={Edit} />
                <Route path='/delete/:id' exact component={Delete} />
                <Route path='/StreamShow/:id' exact component={StreamShow} />
            </Router>
        </div>
    )
}

export default App
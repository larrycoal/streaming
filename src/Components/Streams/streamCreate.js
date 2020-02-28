import React from 'react'
import {connect} from 'react-redux'
import {createStreams} from '../../Actions'
import CreateForm from './CreateForm'

class streamCreate extends React.Component {

    onFormSubmit=(formValues)=>{
        this.props.createStreams(formValues)
    }

    render() {
        return (
            <div>
                <h3>Create Stream</h3>
               <CreateForm onSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}

export default connect(null,{createStreams})(streamCreate)
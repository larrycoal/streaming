import React from 'react'
import _ from 'lodash'
import { fetchStream,editStreams } from '../../Actions'
import { connect } from 'react-redux'
import CreateForm from './CreateForm'


class Edit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit=(formValues)=>{
        this.props.editStreams(this.props.match.params.id,formValues)
    }

    render() {
        if(!this.props.stream){
            return <div>loading...</div>
        }
        
        return (
            <div>
                <h3>Edit Stream</h3>
                <CreateForm 
                initialValues={_.pick(this.props.stream,'title','description')}
                onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
 return {stream:state.stream[ownProps.match.params.id]}
 
}
export default connect(mapStateToProps, { fetchStream,editStreams })(Edit)
import React from 'react'
import Modal from '../Modal'
import { deleteStream, fetchStream } from '../../Actions'
import { connect } from 'react-redux'
import history from '../History'

class Delete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        return (
            <React.Fragment>
                <div onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</div>
                <div onClick={() => history.push('/')} className="ui button">Cancel</div>
            </React.Fragment>
        )
    }

    render() {
        if (!this.props.stream) {
            return <div>loading.....</div>
        }
        return (
            <div>
                <Modal
                    title="Delete Stream"
                    content={`Are sure you want to delete ${this.props.stream.title} stream`}
                    actions={this.renderActions()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id] }
}
export default connect(
    mapStateToProps,
    { deleteStream, fetchStream }
)(Delete)
import React from 'react'
import { fetchStreams } from '../../Actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class stream extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderButton(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }
    createStreamButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ "textAlign": "right" }}>
                    <Link to="/new">
                        <button className="ui button primary">Create Stream</button>
                    </Link>
                </div>
            )
        }
    }
    streamKey(id) {
        if (this.props.isSignedIn) {
            return (
                <div className="description">
                    Your Stream Key:{id}
                </div>
            )
        }
    }
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderButton(stream)}
                    <i className="ui large camera icon"></i>
                    <Link to={`/StreamShow/${stream.id}`} className="content">
                        {stream.title}
                    </Link>
                    <div className="description">
                        {stream.description}
                    </div>
                    {this.streamKey(stream.userId)}
                </div>

            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron container">
                    <h1 className="display-4">McSTREAMY</h1>
                    <p className="lead">A live streaming app made seamless, login with your google account to start streaming</p>
                    <hr className="my-4"></hr>
                    <p>Powered by Open BroadCaster Software, stream live from your OBS with our server and key provided at stream creation</p>
                    <div to="/new">{this.createStreamButton()}</div>
                </div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.stream),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { fetchStreams })(stream)
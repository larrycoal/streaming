import React from 'react'
import { fetchStreams } from '../../Actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class stream extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderButton(stream){
       if(stream.userId === this.props.currentUserId){
        return(
            <div className="right floated content">
                <Link to={`/edit/${stream.id}`} className="ui button primary">Edit</Link> 
               <Link to={`/delete/${stream.id}`} className="ui button negative">Delete</Link> 
            </div>
        )
       }
    }
    createStreamButton(){
        if(this.props.isSignedIn){
            return(
                <div style={{"textAlign":"right"}}>
               <Link to="/new">
                   <button className="ui button primary">Create Stream</button>
               </Link>
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
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.createStreamButton()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.stream),
        currentUserId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { fetchStreams })(stream)
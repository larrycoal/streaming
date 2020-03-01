import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../Actions'
import flvjs from 'flv.js'

class StreamShow extends React.Component {
    constructor(props) {
        super(props)
        this.videoRef = React.createRef()


    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        this.buildPlayer()

    }
    componentDidUpdate(){
        this.buildPlayer()
    }
    componentWillUnmount(){
        this.player.destroy()
    }
    buildPlayer = () => {
        if (this.player || !this.props.stream) {
            return
        }
        this.player = flvjs.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.stream.userId}.flv`
        });
        
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }
    renderShow() {
        return (
            <video ref={this.videoRef} style={{ width: '100%' }} controls />
        )
    }

    render() {
        if (!this.props.stream) {
            return <div>loading!!!</div>
        }
        return (
            <div>
                {this.renderShow()}
                <h1>{this.props.stream.title}</h1>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow)
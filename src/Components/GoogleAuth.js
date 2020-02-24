import React from 'react'
import {signIn,signOut} from '../Actions'
import {connect} from 'react-redux'


class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '618130702860-p8rte90ve3avgskfijmlsuvt653u36de.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.authenticateUser(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authenticateUser)
            })
        })
    }

    authenticateUser = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    renderButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <div>
                    <button className="ui google plus button" onClick={() => this.auth.signOut()}>
                        <i className="google plus icon">
                        </i>
                        SignOut
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <button className="ui google plus button" onClick={() => this.auth.signIn()}>
                        <i className="google plus icon">
                        </i>
                        SignIn
                    </button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)
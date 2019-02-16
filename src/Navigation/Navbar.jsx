import React, {Component} from 'react'
import {Menu, Button, Container} from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import SignIn from './SignIn';
import Login from './Login'

 class Navbar extends Component {
    state = {
        isAuthenticated: false,
        isRegister:false,
        usernameToPass:this.props.username,
        navbarShow:false
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll=()=>{
        if (window.scrollY>30) {
            this.setState({
                navbarShow:true
            })
        }else{
            this.setState({
                navbarShow:false
            })
        }
    }
    signIn = (username) => {        
        this.setState({
            isAuthenticated:true,
            isRegister:false,
            usernameToPass:username
        })
    }
    signOut = () => {
        this.setState({
            isAuthenticated:false,
            isRegister:false
        })
        this.props.history.push('/')
    }
    render() {
        return (
            <Menu fixed="top" 
            style={{
                background: this.state.navbarShow? 'Crimson':'dodgerBlue',
            }}
            >
                <Container>
                    <Menu.Item as={Link} to='/'>
                        <img
                            src="assets/logoNew.png"
                            alt=""
                            style={{
                            marginRight: '15px'
                        }}/>
                        <b style={{color:'white'}}>Home</b>
                    </Menu.Item>
                    
                    <Menu.Item as={NavLink} to='/events' name="Events"
                    style= {{color:'white', fontWeight:'bold'}}
                    />
                    <Menu.Item as={NavLink} to='/people' name="People" style= {{color:'white', fontWeight:'bold'}}/>
                    {this.state.isAuthenticated &&
                    <Menu.Item>
                        <Link to={'/createEvent'}>
                    <Button floated='right' basic inverted><b style= {{color:'white'}}>Create Event</b></Button>
                    </Link>
                    </Menu.Item>}
                    {this.state.isAuthenticated
                        ? <SignIn signOut={this.signOut} username={this.state.usernameToPass}/>
                        : <Login signIn={this.signIn}/>}
                </Container>
            </Menu>
        )
    }
}
export default withRouter(Navbar)

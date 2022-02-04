import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core' 
import { Link,useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
const useStyles=makeStyles({
    component:{
        background:'#FFFFFF',
        color:'black'
    },
    container:{
        justifyContent:'center',
        '& > *':{
            padding:20
        }
    }
})
export default function Header() {
    const classes = useStyles();
    const history=useHistory()
    const { oktaAuth, authState } = useOktaAuth();
    


    if (!authState) return null;
    
   

    const login = async () => history.push('/login');

    const logout = async () => oktaAuth.signOut();


    const button = authState.isAuthenticated ?
    <button onClick={logout}
    style={
        {
            background:'unset',
            border:'none',
            textTransform:'uppercase',
            fontFamily:'Roboto',
            fontSize:17,
            cursor:'pointer',
            opacity:0.6
        }
    }
    >Logout</button> :
    <button onClick={login}>Login</button>;

    return (
        <div>
            <AppBar className={classes.component} >
                <Toolbar className={classes.container}>
                    <Link to='/' style={{textDecoration:'none',color:'inherit'}}><Typography>HOME</Typography></Link>
                    <Typography>ABOUT</Typography>
                    <Typography>CONTACT</Typography>
                    <Typography>{button}</Typography>   
                </Toolbar>
            </AppBar>

        </div>
    )
}

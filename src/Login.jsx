import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography, Divider, Container } from '@mui/material';
import { Facebook, Microsoft } from '@mui/icons-material';

const Login = () => {
  return (
    <>  
        <Container component="main" maxWidth="xs" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div>
                <Typography variant="h9" align="left" gutterBottom>
                    <strong>Sign in with your social account</strong>
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                    <Button variant="contained" color="primary" startIcon={<Facebook />} style={{width: '48%', height: '50%', textTransform: 'none',  backgroundColor: '#0d47a1', color: '#fff' }}>
                        Facebook
                    </Button>          
                    <Button variant="outlined" color="primary" startIcon={<Microsoft />} style={{ width: '48%', height: '50%', textTransform: 'none', color: 'black'}}>
                        Microsoft
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px', width: '100%' }}>
                    <Divider style={{ width: '55%', marginRight: '16px' }} /> 
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        OR
                    </Typography> 
                    <Divider style={{ width: '31%', marginLeft: '16px' }} /> 
                </div>
                <Typography variant="h9" align="left" gutterBottom >
                    <strong>Sign in with your email address</strong>
                </Typography>
                <div>
                    <Typography variant="subtitle1" display="inline" style={{ marginBottom: '8px', fontWeight: 'bold' }}>
                        Email Address
                    </Typography>
                    <TextField variant="outlined" margin="normal" required fullWidth id="email" placeholder="Email Address" name="email" autoComplete="email" autoFocus inputProps={{ style: { height: '8px' } }} style={{ marginTop: '0px' }}/>
                    <Typography variant="subtitle1" display="inline" style={{ marginRight: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
                        Password
                    </Typography>
                    <Link style={{ textDecoration: 'none', display: 'inline-block', marginLeft: '8px' }}>
                        <Typography variant="body2" color="primary">
                            Forgot your password?
                        </Typography>
                    </Link>
                    <TextField variant="outlined" margin="normal" required fullWidth name="password" placeholder="Password" type="password" id="password" autoComplete="current-password" inputProps={{ style: { height: '8px' } }} style={{ marginTop: '0px' }}/>               
                </div>                 
                <Link to="/formulario">
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '5px 0', width: '25%', height: '50%' }}>
                        Sign in
                    </Button>
                </Link>
                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                    <Typography>
                    <strong>Don't have an account? </strong> 
                    </Typography>
                    <Link style={{ textDecoration: 'none', marginLeft: '4px' }}>
                        <Typography color="primary" variant="subtitle1">
                            Sign up now
                        </Typography>
                    </Link>
                </div>            
            </div>
        </Container>
    </>
  );
};

export default Login;

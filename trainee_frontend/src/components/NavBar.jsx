import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: #37729e;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const Copyright = styled(Typography)`
  font-size: 14px;
  color: #ffffff;
  margin-top: 8px;
`;

const NavBar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        
        <Tabs to='/all'>All Books</Tabs>
        <Tabs to='/add'>Add Book</Tabs>
        <div style={{ flexGrow: 1 }}></div>
        <Typography variant='subtitle2' color='inherit' align='right'>
         Jayraj Malamdi
        </Typography>
      </Toolbar>
    </Header>
  );
};

export default NavBar;

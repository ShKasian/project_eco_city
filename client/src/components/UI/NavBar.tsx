import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logoutUserThunk } from "../../features/redux/thunkActions/userThunkActions"

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch()

//   const userSignInHandler= (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//  {
//       return;
//     }

//    void dispatch(signinUserThunk())
//   };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const user = useAppSelector(state => state.user)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  return (

    <AppBar position="static" sx={{ backgroundColor: '#4CAF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h2" noWrap component="a" href="/">
            ♻
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Grid container fontSize='23px'>
              <Grid item ml='50px'>
                <Link to="/news">Новости</Link>
              </Grid>
              <Grid item ml='70px'>
                <Link to="/reception">Пункты сбыта</Link>
              </Grid>
              <Grid item ml='75px'>
                <Link to="/initiative">Идеи</Link>
              </Grid>
              <Grid item ml='555px' fontSize='20px'>
               {user.data.status !=='logged' &&(

                 <Link to="/signup">Регистрация / Вход</Link>
               )}
              </Grid>
            </Grid>
          </Box>

            {user.data.status === 'logged' && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>

              <Menu
              sx={{ mt: '38px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/lk/:id">Личный кабинет</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/" onClick={() => void dispatch(logoutUserThunk())}>
                  Выход
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

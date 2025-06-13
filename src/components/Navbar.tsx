import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import { ClearCookie, GetCookie } from "../common/Cookie";
import React, { useState } from 'react';

export default function Navbar() {
  // const navItems = [
  //   { label: 'Dashboard', path: '/dashboard' },
  //   { label: 'ข้อมูลการขาย', path: '/sales' },
  // ];
  const location = useLocation();

  // ✅ จำลองชื่อผู้ใช้จาก cookie
  const username = GetCookie("name") || "Guest";

  // 🔽 state สำหรับเมนู user dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    ClearCookie();
    window.location.href =
      "https://sso2.pea.co.th/realms/pea-users/protocol/openid-connect/logout?redirect_uri=http://172.30.212.196:3000/login";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          PEA 115 kV Grid capacity : ระบบตรวจสอบความสามารถในการจ่ายไฟให้ Data center ใน EEC
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          {/* {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: '#fff',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                textDecoration: location.pathname === item.path ? 'underline' : 'none',
              }}
            >
              {item.label}
            </Button>
          ))} */}

          {/* 🔽 User Icon + Menu */}
          <IconButton
            size="large"
            aria-label="user account"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{ ml: 2 }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem disabled>ผู้ใช้งาน: {username}</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

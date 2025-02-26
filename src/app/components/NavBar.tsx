'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import styles from './NavBar.module.css';
interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const menuItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Clients', path: '/clients' },
    { label: 'Transactions', path: '/transactions' },
    { label: 'Comptes', path: '/comptes' },
  ];
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#005A9C" }}>
      <Toolbar className={styles.navBarContainer}>
        <Typography variant="h6" className={styles.navBarTitle}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex' }}>
        {menuItems.map((item) => (
            <Button key={item.path} color="inherit" className={styles.navBarButton}>
              <Link href={item.path} className={styles.navBarLink}>
                {item.label}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

// src/components/Layout.tsx
import { ReactNode } from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      {/* Toolbar gives spacing equal to AppBar height */}
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{ flexGrow: 1, py: 4, backgroundColor: 'background.default' }}
      >
        {children}
      </Container>
    </Box>
  );
}

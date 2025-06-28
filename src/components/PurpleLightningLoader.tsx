// PurpleLightningLoader.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import '../App.css'; // import CSS animation

export default function PurpleLightningLoader() {
  return (
    <div className="loader-root">
      <div className="loader-spinner">
        <div className="rotating-circle"></div> {/* วงกลมหมุน */}
        <svg
          className="lightning-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M296 160H180.3L214.6 24.3C219.7 2.1 191.1-6.6 181.2 12L40 272c-7.4 13.5 2.7 30 18.8 30h115.7L105.4 487.7c-5.1 22.2 23.5 30.9 33.4 12.3L280 192c7.4-13.5-2.7-32-18-32z" />
        </svg>
      </div>
    </div>
  );
}
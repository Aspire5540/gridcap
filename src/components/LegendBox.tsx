import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const LegendBox: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 24,
        left: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // ✅ โปร่งแสง
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
        zIndex: 2,
        minWidth: 100,
        backdropFilter: 'blur(4px)', // ✅ เพิ่ม blur ให้ดูฟุ้งสวย
      }}
    >
      <Stack spacing={1}>
        <Box display="flex" alignItems="center">
          <Box sx={{ width: 12, height: 12, bgcolor: 'green', mr: 1 }} />
          <Typography variant="body2">&gt; 150 MW</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box sx={{ width: 12, height: 12, bgcolor: 'gold', mr: 1 }} />
          <Typography variant="body2">50 - 150 MW</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box sx={{ width: 12, height: 12, bgcolor: 'red', mr: 1 }} />
          <Typography variant="body2">&lt; 50 MW</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default LegendBox;
import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selectedCategory = 'New';

export default function Sidebar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((catagory) => (
        <button
          className="category-btn"
          style={{
            background: catagory.name === selectedCategory && '#Fc1503',
          }}
        >
          <span>{catagory.icon}</span>
          <span>{catagory.name}</span>
        </button>
      ))}
    </Stack>
  );
}

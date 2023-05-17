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
            color: 'white',
          }}
          key={catagory.name}
        >
          <span
            style={{
              color: catagory.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px',
            }}
          >
            {catagory.icon}
          </span>
          <span
            style={{
              opacity: catagory.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {catagory.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

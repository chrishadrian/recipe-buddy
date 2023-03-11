import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material';

export const SearchBar = ({ recipes, setFilteredRecipes }) => {
    const handleSearchChange = (e) => {
        const searchText = e.target.value
        setFilteredRecipes(recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchText.toLowerCase())
        ))
    }

    return (
        <TextField
            label="Search"
            size="small"
            onChange={handleSearchChange}
            sx={{
                borderRadius: 20,
                width: '15rem',
                color: 'gray',
                fontWeight: '500',
                '& .MuiInputBase-root': {
                    borderRadius: 20,
                    pl: 1
                },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    )
}
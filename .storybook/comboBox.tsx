import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SelectTheme = ({ theme, setTheme }) => {
  const handleChange = (event) => {
    setTheme(event.target.value)
  }

  return (
    <>
      <Box sx={{ minWidth: 240 }}>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={theme}
            onChange={handleChange}
            sx={{
              color: '#2196f3',
              fontSize: '20px',
              fontWeight: 'bold',
              border: '2px solid #2196f3',
              outline: 'none',
              borderRadius: 0,
            }}
          >
            <MenuItem value={'light'}>Light</MenuItem>
            <MenuItem value={'dark'}>Dark</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  )
}
export { SelectTheme }

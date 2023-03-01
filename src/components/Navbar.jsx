import React, { useState } from 'react'

import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Stack } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === '') {
      alert('enter a country')
      navigate('/')
    } else {
      navigate(`/country/${input}`)
      setInput('')
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" aria-label="hamburgerMenu" color="inherit">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'}>Country</Link>
        </Typography>

        <Stack direction="row" spacing={2}>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search country"
              className="w-32 sm:w-52 h-8 border text-black border-gray-400 py-2 px-4 rounded-md hover:border-white focus:border-white focus:outline-none focus:shadow-outline-blue"
            />
            <button className="bg-white px-2 rounded-lg">
              <SearchIcon className="hover:scale-105 hover:ease-in-out hover:duration-300 text-blue-600" />
            </button>
          </form>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

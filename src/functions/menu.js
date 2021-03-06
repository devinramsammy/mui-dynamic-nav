import React, { useState } from 'react'
import {
  IconButton,
  Menu,
  MenuItem,
  Icon,
  ListItemIcon,
  Typography
} from '@material-ui/core'

export default function SimpleMenu({ menuItems }) {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }
  const handleClose = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(false)
  }

  return (
    <React.Fragment>
      <IconButton
        onClick={(event) => {
          handleOpen(event)
        }}
      >
        <Icon color='primary'>more_vert</Icon>
      </IconButton>
      <Menu
        id='simpleMenu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((menuItem, index) => {
          const handleClick = (event) => {
            menuItem.function()
            handleClose(event)
          }
          return (
            <MenuItem key={index} onClick={handleClick}>
              <ListItemIcon>
                <Icon color='primary'>{menuItem.icon}</Icon>
              </ListItemIcon>
              <Typography variant='inherit' noWrap>
                {menuItem.title}
              </Typography>
            </MenuItem>
          )
        })}
      </Menu>
    </React.Fragment>
  )
}

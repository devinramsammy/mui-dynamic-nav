import React, { useState } from 'react'
import {
  Menu,
  MenuItem,
  Icon,
  ListItemIcon,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Hoverable({ children, icon, title, mode }) {
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
  // Bug with hoverable, will reapproach after release
  mode = 'click'
  return (
    <React.Fragment>
      {mode === 'click' ? (
        <ListItem button={true} onClick={handleOpen}>
          <ListItemIcon style={{ minWidth: '30px' }}>
            <Icon color='primary'>{icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={title} />
          {open ? (
            <Icon color='primary'>expand_less</Icon>
          ) : (
            <Icon color='primary'>expand_more</Icon>
          )}
        </ListItem>
      ) : (
        <ListItem button={true} onMouseEnter={handleOpen}>
          <ListItemIcon style={{ minWidth: '30px' }}>
            <Icon color='primary'>{icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={title} />
          {open ? (
            <Icon color='primary'>expand_less</Icon>
          ) : (
            <Icon color='primary'>expand_more</Icon>
          )}
        </ListItem>
      )}

      <Menu
        id='simpleMenu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose
        }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {children.map((nav, index) => {
          const handleClick = (event) => {
            handleClose(event)
          }
          return (
            <MenuItem
              key={index}
              onClick={handleClick}
              component={Link}
              to={nav.href}
            >
              <ListItemIcon>
                <Icon color='primary'>{nav.icon}</Icon>
              </ListItemIcon>
              <Typography variant='inherit' noWrap>
                {nav.title}
              </Typography>
            </MenuItem>
          )
        })}
      </Menu>
    </React.Fragment>
  )
}

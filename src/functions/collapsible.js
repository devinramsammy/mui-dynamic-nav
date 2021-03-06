import React, { useState } from 'react'
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon
} from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Collapsible({ title, icon, children, toggleDrawer }) {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <React.Fragment key={title}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Icon color='primary'>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? (
          <Icon color='primary'>expand_less</Icon>
        ) : (
          <Icon color='primary'>expand_more</Icon>
        )}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {children.map((nav, index) => {
            return (
              <React.Fragment key={index}>
                <ListItem
                  button={true}
                  key={index}
                  style={{ paddingLeft: '15%' }}
                  component={Link}
                  to={nav.href}
                  onClick={() => {
                    toggleDrawer(false)
                  }}
                >
                  <ListItemIcon>
                    <Icon color='primary'>{nav.icon}</Icon>
                  </ListItemIcon>

                  <ListItemText primary={nav.title} />
                </ListItem>
              </React.Fragment>
            )
          })}
        </List>
      </Collapse>
    </React.Fragment>
  )
}

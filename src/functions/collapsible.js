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

export default function Collapsible({ title, icon, children }) {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <React.Fragment>
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
              <React.Fragment>
                <ListItem
                  button={true}
                  key={index}
                  style={{ paddingLeft: '15% !important' }}
                  component={Link}
                  to={nav.href}
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

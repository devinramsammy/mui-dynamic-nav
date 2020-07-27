import React, { useState } from 'react'
import styles from '../css/generator.module.css'
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon
} from '@material-ui/core'

export default function Collapsible({ title, icon, children }) {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
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
              <>
                <ListItem
                  button={true}
                  key={index}
                  className={styles.nestedList}
                  component={Link}
                  to={nav.href}
                >
                  <ListItemIcon>
                    <Icon color='primary'>{nav.icon}</Icon>
                  </ListItemIcon>

                  <ListItemText
                    primary={nav.title}
                    className={styles.listItem}
                  />
                </ListItem>
              </>
            )
          })}
        </List>
      </Collapse>
    </div>
  )
}

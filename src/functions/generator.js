import React from 'react'
import { checkTitle } from './validator.js'
import {
  Typography,
  IconButton,
  Icon,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@material-ui/core'
import styles from '../css/generator.module.css'
import Collapsible from './collapsible'
import SimpleMenu from './menu'
import Hoverable from './hoverable'
import { Link } from 'react-router-dom'

export const titleGenerate = (title, type) => {
  if (title !== undefined) {
    var alignTitle = ''
    type === 'drawer' ? (alignTitle = 'center') : (alignTitle = 'left')
  }
  switch (checkTitle(title)) {
    case 'string':
      return (
        <Typography variant='h6' align={alignTitle} className={styles.title}>
          {title}
        </Typography>
      )
    case 'image':
      if (alignTitle === 'center') {
        return (
          <div className={styles.logoCenter}>
            <img src={title} height='45px' alt='Logo' id='logo' />
          </div>
        )
      } else {
        return (
          <div className={styles.logoLeft}>
            <img src={title} height='45px' alt='Logo' id='logo' />
          </div>
        )
      }
    case 'unknown':
      throw new Error('Error with data in title prop!')
    default:
      break
  }
}

export const typeGenerate = (data, type, toggleDrawer, drawer) => {
  switch (type) {
    case 'drawer':
      return (
        <div>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={() => {
              toggleDrawer(true)
            }}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Drawer
            open={drawer}
            onClose={() => {
              toggleDrawer(false)
            }}
          >
            <List className={styles.drawer}>
              {data.map((nav, index) => {
                if (nav.pages !== undefined) {
                  return (
                    <Collapsible
                      key={index}
                      title={nav.title}
                      icon={nav.icon}
                      children={nav.pages}
                    ></Collapsible>
                  )
                } else {
                  return (
                    <>
                      <ListItem
                        button={true}
                        key={index}
                        component={Link}
                        to={nav.href}
                      >
                        <ListItemIcon>
                          <Icon color='primary'>{nav.icon}</Icon>
                        </ListItemIcon>

                        <ListItemText primary={nav.title} />
                      </ListItem>
                    </>
                  )
                }
              })}
            </List>
          </Drawer>
        </div>
      )

    case 'hoverable':
      var mode = 'hover'
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        mode = 'click'
      }
      return (
        <div>
          <List className={styles.horizontalList}>
            <Grid container direction='row'>
              {data.map((nav, index) => {
                if (nav.pages !== undefined) {
                  return (
                    <Grid item key={index}>
                      <Hoverable
                        title={nav.title}
                        icon={nav.icon}
                        children={nav.pages}
                        mode={mode}
                      ></Hoverable>
                    </Grid>
                  )
                } else {
                  return (
                    <>
                      <Grid item key={index}>
                        <ListItem
                          button={true}
                          key={index}
                          component={Link}
                          to={nav.href}
                        >
                          <ListItemIcon className={styles.navbarListIcon}>
                            <Icon color='primary'>{nav.icon}</Icon>
                          </ListItemIcon>

                          <ListItemText primary={nav.title} />
                        </ListItem>
                      </Grid>
                    </>
                  )
                }
              })}
            </Grid>
          </List>
        </div>
      )
    default:
      throw new Error('Unknown type in type prop!')
  }
}

export const additionalButtonsGenerate = (additonalButtons, simpleMenu) => {
  if (additonalButtons !== undefined) {
    return (
      <div className={styles.additionalButtons}>
        {additonalButtons.map((buttons, index) => {
          if (
            buttons.iconButton === undefined ||
            buttons.iconButton === false
          ) {
            return (
              <div>
                <Button
                  key={index}
                  onClick={buttons.function}
                  variant='outlined'
                  color='inherit'
                >
                  {buttons.icon ? (
                    <Icon>{buttons.title}</Icon>
                  ) : (
                    <Typography>{buttons.title}</Typography>
                  )}
                </Button>
              </div>
            )
          } else {
            return (
              <div>
                <IconButton
                  key={index}
                  onClick={buttons.function}
                  color='inherit'
                >
                  {buttons.icon ? (
                    <Icon>{buttons.title}</Icon>
                  ) : (
                    <Typography>{buttons.title}</Typography>
                  )}
                </IconButton>
              </div>
            )
          }
        })}
        {simpleMenu !== undefined ? (
          <SimpleMenu menuItems={simpleMenu}></SimpleMenu>
        ) : (
          <></>
        )}
      </div>
    )
  }
}

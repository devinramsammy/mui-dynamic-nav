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
        <Typography
          variant='h6'
          align={alignTitle}
          style={{ marginLeft: 'auto' }}
        >
          {title}
        </Typography>
      )
    case 'image':
      if (alignTitle === 'center') {
        return (
          <div style={{ marginLeft: 'auto' }}>
            <img src={title} height='45px' alt='Logo' id='logo' />
          </div>
        )
      } else {
        return (
          <div style={{ marginLeft: '5% auto' }}>
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
        <React.Fragment>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={() => {
              toggleDrawer(true)
            }}
          >
            <Icon color='primary'>menu</Icon>
          </IconButton>
          <Drawer
            open={drawer}
            onClose={() => {
              toggleDrawer(false)
            }}
            PaperProps={{
              style: { minWidth: '200px', maxWidth: '300px', width: '50%' }
            }}
          >
            <List>
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
                    <React.Fragment>
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
                    </React.Fragment>
                  )
                }
              })}
            </List>
          </Drawer>
        </React.Fragment>
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
        <React.Fragment>
          <List style={{ marginLeft: 'auto' }}>
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
                        key={index}
                      ></Hoverable>
                    </Grid>
                  )
                } else {
                  return (
                    <React.Fragment>
                      <Grid item key={index}>
                        <ListItem
                          button={true}
                          key={index}
                          component={Link}
                          to={nav.href}
                        >
                          <ListItemIcon style={{ minWidth: '30px' }}>
                            <Icon color='primary'>{nav.icon}</Icon>
                          </ListItemIcon>

                          <ListItemText primary={nav.title} />
                        </ListItem>
                      </Grid>
                    </React.Fragment>
                  )
                }
              })}
            </Grid>
          </List>
        </React.Fragment>
      )
    default:
      throw new Error('Unknown type in type prop!')
  }
}

export const additionalButtonsGenerate = (additonalButtons, simpleMenu) => {
  if (additonalButtons !== undefined) {
    return (
      <div style={{ marginLeft: 'auto', flexDirection: 'row' }}>
        {additonalButtons.map((buttons, index) => {
          if (
            buttons.iconButton === undefined ||
            buttons.iconButton === false
          ) {
            return (
              <React.Fragment>
                <Button
                  key={index}
                  onClick={buttons.function}
                  variant='outlined'
                >
                  {buttons.icon ? (
                    <Icon color='primary'>{buttons.title}</Icon>
                  ) : (
                    <Typography>{buttons.title}</Typography>
                  )}
                </Button>
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment>
                <IconButton key={index} onClick={buttons.function}>
                  {buttons.icon ? (
                    <Icon color='primary'>{buttons.title}</Icon>
                  ) : (
                    <Typography>{buttons.title}</Typography>
                  )}
                </IconButton>
              </React.Fragment>
            )
          }
        })}
        {simpleMenu !== undefined ? (
          <SimpleMenu menuItems={simpleMenu}></SimpleMenu>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    )
  }
}

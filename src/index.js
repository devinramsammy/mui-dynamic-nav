import React, { useState } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  titleGenerate,
  typeGenerate,
  additionalButtonsGenerate
} from './functions/generator'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function DynamicNavbar({
  type = 'drawer',
  data,
  title,
  simpleMenu,
  additionalButtons
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxHeight: '65px'
    }
  }))

  const mobile = !useMediaQuery('(min-width:960px)')
  if (data === undefined) {
    throw new Error('Error with data in data prop!')
  }
  if (title === undefined) {
    throw new Error('Error with data in title prop!')
  }
  if (mobile) {
    type = 'drawer'
  }
  if (data.length > 8) {
    type = 'drawer'
  }

  const [drawer, toggleDrawer] = useState(false)
  const classes = useStyles()
  if (type === 'drawer') {
    return (
      <AppBar className={classes.root} color='primary'>
        <Toolbar>
          {typeGenerate(data, type, toggleDrawer, drawer)}
          {titleGenerate(title, type)}
          {additionalButtonsGenerate(additionalButtons, simpleMenu, type)}
        </Toolbar>
      </AppBar>
    )
  } else {
    return (
      <AppBar className={classes.root} color='primary'>
        <Toolbar>
          {titleGenerate(title, type)}
          {typeGenerate(data, type, toggleDrawer, drawer)}
          {additionalButtonsGenerate(additionalButtons, simpleMenu, type)}
        </Toolbar>
      </AppBar>
    )
  }
}

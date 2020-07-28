import React from 'react'

import DynamicNavbar from 'mui-dynamic-nav'
import 'mui-dynamic-nav/dist/index.css'

const App = () => {
  const someFunction = () => {
    return
  }
  const testData = [
    {
      title: 'Some Title',
      href: '/someLocation',
      // Icon uses material library from google
      icon: 'list'
    },

    {
      title: 'Some Title',
      pages: [
        {
          title: 'Some Title',
          href: '/someLocation',
          // Icon uses material library from google
          icon: 'list'
        },
        {
          title: 'Some Title',
          href: '/someLocation',
          // Icon uses material library from google
          icon: 'list'
        }
      ],
      // Icon uses material library from google
      icon: 'list'
    }
  ]
  const additionalButtonsConfig = [
    {
      /* Set property iconButton to false or don't include in config to use normal button */
      iconButton: true,
      function: someFunction,
      title: 'list',
      icon: true
    },
    {
      /* Set property iconButton to false or don't include in config to use normal button */
      iconButton: false,
      function: someFunction,
      title: 'list',
      icon: false
    },
    {
      /* Set property iconButton to false or don't include in config to use normal button */
      iconButton: true,
      function: someFunction,
      title: 'list',
      icon: false
    }
  ]

  return (
    <>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <DynamicNavbar
        title={'Test'}
        data={testData}
        additionalButtons={additionalButtonsConfig}
      />
    </>
  )
}

export default App

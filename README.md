# mui-dynamic-nav

[![NPM](https://img.shields.io/npm/v/mui-dynamic-nav.svg)](https://www.npmjs.com/package/mui-dynamic-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-dynamic-nav
```

## Introduction

Mui-Dynamic-Nav was created as an utility to help streamline the inital development process for react dashboard projects. It is a dynamic package that works ontop of the react-router-dom, React, and Material-UI frameworks. It is dynamic due to the fact that it uses the Material UI theming technology which is a powerful styling tool.

## Get Started

```jsx
import React, { Component } from "react";
import DynamicNavbar from "mui-dynamic-nav";
const navbarData = [
  { title: "Home", href: "/", icon: "dashboard" }
]
class App extends Component {
  render() {
    return (
      <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <DynamicNavbar
            title={"TITLE"}
            data={navbarData}
            type="hoverable"
          ></DynamicNavbar>
      </div>
    )
}
```

## Documentation

More in depth documentation is hosted [here](https://www.dramsammy.dev/mui-dynamic-nav).

## License

MIT © [dramsammy](https://github.com/dramsammy)

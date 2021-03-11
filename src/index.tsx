
import * as React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './main'
// eslint-disable-next-line no-use-before-define
// const App:any = r => require.ensure([], () => r(require('./')), 'index')
ReactDom.render(<App/>, document.querySelector('#app'))

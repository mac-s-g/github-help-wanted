import React from 'react'

//dev tools (included with development build only)
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// createDevTools takes a monitor and produces a DevTools component
export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    defaultIsVisible={false}
    defaultPosition='right'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

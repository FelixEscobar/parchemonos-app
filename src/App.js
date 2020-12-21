import React from 'react'
import { Navigation } from './pages/Navigation'
import { MessageContext } from './contexts/MessageContext'
import { UserContextStore } from './contexts/UserContext'

export const App = () => (
  <MessageContext.Provider>
    <UserContextStore>
      <Navigation />
    </UserContextStore>
  </MessageContext.Provider>
)

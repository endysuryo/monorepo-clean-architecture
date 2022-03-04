import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { configureStore } from '../../application/store'
import { AuthProvider } from '../../infrastructure/authProvider'
import routes from '../../infrastructure/routes'
import services from '../../infrastructure/services'

const App = () => {
  return (
    <Provider store={configureStore(services)}>
      <Router>
        <Switch>
          {routes.map(
            ({
              title,
              component: Component,
              url,
              exact,
              requirePermission,
            }) => (
              <Route
                key={url}
                path={url}
                exact={exact}
                render={(compProps: any) => (
                  <AuthProvider {...requirePermission}>
                    <Component
                      {...compProps}
                      requirePermission={requirePermission}
                      title={title}
                    />
                  </AuthProvider>
                )}
              />
            )
          )}
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

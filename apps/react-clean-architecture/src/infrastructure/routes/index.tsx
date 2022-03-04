import { Redirect } from 'react-router'
import campaign from '../../presentation/views/campaign/config/CampaignConfig'
import Main from '../../presentation/views/main'
import NotFound from '../../presentation/views/notFound'

const publicRoute = [
  {
    title: 'Home',
    component: () => <Main />,
    url: '/',
    exact: true,
    requirePermission: false,
  },
  {
    title: '404',
    component: () => <NotFound />,
    url: '/404',
    exact: true,
    requirePermission: false,
  },
  {
    title: '',
    component: () => <Redirect to="/404" />,
    url: '*',
    exact: true,
    requirePermission: false,
  },
]

const routes = [...campaign, ...publicRoute]

export default routes

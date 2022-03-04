import campaign from '../../presentation/views/campaign/config/CampaignConfig'

const publicRoute = [
  {
    title: 'Home',

    url: '/',
    exact: true,
    requirePermission: false,
  },
  {
    title: '404',

    url: '/404',
    exact: true,
    requirePermission: false,
  },
]

const routes = [...campaign, ...publicRoute]

export default routes

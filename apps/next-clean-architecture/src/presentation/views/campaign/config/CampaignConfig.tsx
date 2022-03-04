import CampaignDetail from '../id'
import CampaignView from '../index'

const CampaignConfig = [
  {
    title: 'Campaign',
    component: () => <CampaignView />,
    url: '/campaign',
    exact: true,
    requirePermission: true,
  },
  {
    title: 'Campaign Detail',
    component: () => <CampaignDetail />,
    url: '/campaign/:id',
    exact: true,
    requirePermission: true,
  },
]

export default CampaignConfig

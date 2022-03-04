import { LOAD_CAMPAIGN, setCampaign } from '../actions/campaign'

const loadCampaignFlow =
  ({ api }: any) =>
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    console.log('action', action)

    next(action)

    if (action.type === LOAD_CAMPAIGN) {
      try {
        const data = await api.campaign.getAll()
        dispatch(setCampaign(data))
      } catch (error) {
        console.log(error)
      }
    }
  }

export default [loadCampaignFlow]

export const LOAD_CAMPAIGN = '[campaign] load'
export const SET_CAMPAIGN = '[campaign] set'

export const loadCampaign = () => ({
  type: LOAD_CAMPAIGN,
})

export const setCampaign = (data: any) => ({
  type: SET_CAMPAIGN,
  payload: data,
})

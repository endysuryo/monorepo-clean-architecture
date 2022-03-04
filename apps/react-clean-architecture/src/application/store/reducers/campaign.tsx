import CampaignModel from '../../models/campaign'
import ResponseModel from '../../models/response'
import { SET_CAMPAIGN } from '../actions/campaign'

const initialState: ResponseModel<CampaignModel> = {
  data: [],
  error: false,
  message: '',
  status: 0,
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CAMPAIGN:
      return { ...action.data }
    default:
      return state
  }
}

export default reducer

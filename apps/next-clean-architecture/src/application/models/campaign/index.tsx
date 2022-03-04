export default interface CampaignModel {
  id?: number
  order?: number
  parent_project_id?: number
  title: string
  expired: number
  image: string
  days_remaining: number
  donation_received: number
  campaigner: string
  campaigner_type: string
  campaigner_badge: string
  campaigner_is_verified: boolean
  category_name: string
  is_forever_running: boolean
  is_open_goal: boolean
  request_userdata: boolean
  donation_target: number
  donation_percentage: number
  short_url: string
  is_featured?: number
  custom_fb_pixel?: string
}

export const initCampaign: CampaignModel = {
  id: 0,
  order: 0,
  parent_project_id: 0,
  title: '',
  expired: 0,
  image: '',
  days_remaining: 0,
  donation_received: 0,
  campaigner: '',
  campaigner_type: '',
  campaigner_badge: '',
  campaigner_is_verified: false,
  category_name: '',
  is_forever_running: false,
  is_open_goal: false,
  request_userdata: false,
  donation_target: 0,
  donation_percentage: 0,
  short_url: '',
  is_featured: 0,
  custom_fb_pixel: '',
}

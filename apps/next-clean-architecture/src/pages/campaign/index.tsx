import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCampaign } from '../../application/store/actions/campaign'
import { getcampaign } from '../../application/store/selectors/campaign'
import CampaignView from '../../presentation/views/campaign'

interface IProps {
  campaign: any
  loadCampaign: any
}

const Campaign = (props: IProps) => {
  const { campaign, loadCampaign } = props

  useEffect(() => {
    loadCampaign()
  }, [])
  return (
    <div>
      <CampaignView />
    </div>
  )
}
const mapStateToProps = (state: any) => ({
  campaign: getcampaign(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  loadCampaign: bindActionCreators(loadCampaign, dispatch),
})
// export default Campaign

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCampaign } from '../../../application/store/actions/campaign'
import { getcampaign } from '../../../application/store/selectors/campaign'
import Campaign from '../../components/campaign/Campaign'
import Header from '../../components/header/Header'

const CampaignView = () => {
  const [campaignList, setCampaignList] = useState([])

  const dispatch = useDispatch()
  const campaign = useSelector(getcampaign)

  useEffect(() => {
    dispatch(loadCampaign)
  }, [dispatch])

  useEffect(() => {
    setCampaignList(campaign)
  }, [campaign])

  return (
    <div>
      <Header child={[]} />

      <main>
        <div className="flex-between mt-5 flex">
          {campaignList.map((el: any) => (
            <div key={el.id} className="xs-col-12 sm-col-4 mb-2">
              <Campaign {...el} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default CampaignView

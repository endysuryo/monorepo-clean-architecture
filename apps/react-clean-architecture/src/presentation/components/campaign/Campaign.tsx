import React from 'react'
import './Campaign.scss'

interface IProps {
  image: string
  title: string
  donation_received: number
  donation_percentage: number
  days_remaining: number
}

const Campaign = (props: IProps) => {
  const {
    image,
    title,
    donation_received,
    donation_percentage,
    days_remaining,
  } = props

  return (
    <div className="card p-3">
      <div className="card-border">
        <img className="image" src={image} />
        <div className="content p-2 px-4">
          <div>
            <h2 className="text-title">{title}</h2>
            {(donation_percentage * 100).toFixed(2)}%
          </div>
          <div className="bar relative mt-2 mb-4">
            <div
              className={`bar absolute ${
                donation_percentage * 100 > 100 ? 'success' : 'progress'
              }`}
              style={{ width: donation_percentage * 100 + '%' }}
            />
          </div>
          <div className="flex justify-between">
            <div className="col-6">
              <span>Terkumpul</span>
              <span className="text-donation my-2">
                Rp {donation_received.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="col-6 text-right">
              <span>Sisa Hari</span>
              <span className="text-donation my-2">{days_remaining}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaign

import React from 'react'
// import './Header.scss'

interface IProps {
  child: []
}

const Header = (props: IProps) => {
  return (
    <div className="header">
      <div className="header-section flex justify-between px-10">
        <div>
          {props.child &&
            props.child.map((ch, index) => (
              <div key={index} className="flex">
                {ch}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Header

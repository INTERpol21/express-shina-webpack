import React from 'react'
import './../../scss/CustomBar.scss'
import { Scrollbars } from 'react-custom-scrollbars-2'

const CustomBar = ({ setCoordinate, setZoom, places }) => {
  const handleClick = (place) => {
    setCoordinate([place.latitude, place.longitude])
    setZoom(16)
  }

  return (
    <div className="sidebar">
      <Scrollbars style={{ height: '95vh' }}>
        {places.map((place) => {
          return (
            <div
              className="sidebar__items"
              key={place.latitude}
              tabIndex={0}
              onClick={() => handleClick(place)}>
              <div className="sidebar__content_address">{place.address}</div>
              <div className="sidebar__content_buttons">
                {place.budgets.map((budget) => {
                  return (
                    <div className="sidebar__content_button" key={budget}>
                      {budget}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </Scrollbars>
    </div>
  )
}

export default CustomBar

import React from 'react'
import  './../../scss/CustomBar.scss'
import { Scrollbars } from 'react-custom-scrollbars-2'


const CustomBar = ({ setCoordinate, setZoom, places }) => {
  const handleClick = (place) => {
    setCoordinate([place.latitude, place.longitude])
    setZoom(15)
  }

  return (
    <div className="sidebar">
      <div className="sidebar__container">
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
                  {place.budgets.map((budget, index) => {
                    return (
                      <div className="sidebar__content_button" key={budget + index}>
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
    </div>
  )
}

export default CustomBar

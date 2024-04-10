import React from 'react'
import "./virtual.css"
import shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

const Virtual = () => {
  return (
      <div className="virtual">
          <div className="left">
              <span>Virtual Try-on</span>
              <span>Never Buy the wrong Shade Again!</span>
              <span>Try! On</span>
              <img src={shade} alt="" />
          </div>

          <div className="right">
              Virtual Component
          </div>


          <div className="right">
              <div className="wrapper-img">
              <ReactCompareImage leftImage={Before}
              rightImage={After}/>
              </div>
             
          </div>

      </div>
  )
}

export default Virtual
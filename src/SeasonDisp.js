import React from 'react'

function SeasonDisp(props) {

  const getSeason = (lat, month) => {
    
      if (month > 2 && month < 9) {
        return lat > 0 ? "Summer" : "Winter";
      } else {
        return lat > 0 ? "winter" : "summer";
      }
    }
    const season=getSeason(props.lat, new Date().getMonth());
    return (
      <div>
        
        Season : {season}
      </div>
    )
  }

  export default SeasonDisp;
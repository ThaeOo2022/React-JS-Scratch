import React from 'react'

function SeasonDisp(props) {

  const getSeason = (lat, month) => {
    
      if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
      } else {
        return lat > 0 ? "winter" : "summer";
      }
    }
    const season=getSeason(props.lat, new Date().getMonth());
    //const seasonDescription= season === 'winter' ? 'Burr it is Chilly' : 'Let hit the beach';
    return (
      <div>
        
        Season : {season === 'winter' ? 'Burr it is Chilly' : 'Let hit the beach'}
      </div>
    )
  }

  export default SeasonDisp;
import React from 'react'
import './SeasonDisp.css'

function SeasonDisp(props) {

  const getSeason = (lat, month) => {
    
      if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
      } else {
        return lat > 0 ? "winter" : "summer";
      }
    }
    const seasonConfig={
      summer:{
        text:"Let's hit the beach!",
        iconName:"sun"
      },
      winter:{
        text:"Burr! It is cold",
        iconName:"snowflake"
      }
    }
    const season=getSeason(props.lat, new Date().getMonth());
   const {text,iconName}=seasonConfig[season];
    return (
      <>
      <div className={`season-display ${season}`}>
      <i className={` left-move massive ${iconName} icon`}></i> 
        {text}
        <i className={` right-move massive ${iconName} icon`}></i>  
      </div>
        
      </>
    )
  }

  export default SeasonDisp;
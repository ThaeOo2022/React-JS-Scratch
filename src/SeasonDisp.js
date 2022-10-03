import React from 'react'


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
        text:"It is hot",
        iconName:"sun"
      },
      winter:{
        text:"It is cold",
        iconName:"snowflake"
      }
    }
    const season=getSeason(props.lat, new Date().getMonth());
   const {text,iconName}=seasonConfig[season];
    return (
      <div>
        <i className={`${iconName} icon`}></i> <i className={`${iconName} icon`}></i>
        {text}
        <i className={`${iconName} icon`}></i>  <i className={`${iconName} icon`}></i>
      </div>
    )
  }

  export default SeasonDisp;
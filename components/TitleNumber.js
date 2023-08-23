import React from 'react'

const TitleNumber = ({value}) => {
  return (
   <div style={{display: 'inline-block', paddingRight: 3}}> 
      <span style={{ 
        borderRadius: '50%',
        backgroundColor: '#FFD700',
        color: 'black', 
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center', 
        width: 30,
        height: 30
    }}>{value}</span>
   </div>
  )
}

export default TitleNumber
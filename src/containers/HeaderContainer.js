import React from 'react'

const buttonStyles = {
  width: '10em',
  height: '2.5em',
  backgroundColor: '#2257da',
  color: 'white',
  fontSize: '15px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
}

const headerWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '5em'
}

const title = {
  fontSize: '35px',
  fontWeight: '300'
}

const HeaderContainer = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.axios.com/'
  }
  return (
    <div style={{ ...headerWrapper }}>
      <div style={{...title}}>More From Axios.com</div>
      <button onClick={handleRedirect} style={{ ...buttonStyles }}>
        Visit Axios.com &#8594;
      </button>
    </div>
  )
}

export default HeaderContainer

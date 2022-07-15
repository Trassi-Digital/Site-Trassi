import React from 'react'
import './Cover.css'
import Trassi from'../../assets/logo/trassi.png'
import Bussines from '../../assets/imagem/bussines.jpg'

const Cover = () => {
  return (
      
      <div className='row'>
        <div className="col-md-4 mr-auto order-2 order-md-1 item-cover1">
        <img className="d-block img-cover1"  src={Trassi}  alt="logo-trassi" />
        </div>
        <div className= "col-md-8 mr-auto order-2 order-md-1 item-cover2">
        <img className="d-block img-cover2" src={Bussines} alt="pessoas-maos" />
        </div>
      </div>
 
   
  
  )
}

export default Cover

import React from 'react'
import './Bar.css'
import {FiFacebook, FiTwitter, FiInstagram, FiYoutube,FiFlag } from 'react-icons/fi'

type Props = {}





const about:string = '>เกี่ยวกับเรา'
const contact: string = ">ติดต่อเรา";
const tel: string = "02-616-3400";


const Bar = (props: Props) => {
  return (
    <div className="wrapper">
      <div className="One">
        <div className="box">{about}</div>
        <div className="box">{contact}</div>
        <div className="box">{tel}</div>
      </div>
      <div className="Two">
        <div className="box">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
        </div>

        <div className="box">
          | เปลี่ยนภาษา
          <FiFlag  />
          <FiFlag />
        </div>
      </div>
    </div>
  );
}

export default Bar
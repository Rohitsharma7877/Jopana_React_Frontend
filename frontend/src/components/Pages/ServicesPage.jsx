import React from 'react'

import AIBanner from '../AIBoat/AIBanner'
import MedicalService from '../MedicalService/MedicalService'
import Nursing from '../MedicalService/Nursing'
import HomeAssistance from '../MedicalService/HomeAssistance'
import MotherChildCare from '../MedicalService/MotherChildCare'
import ServiceBlog from '../MedicalService/ServiceBlog'
import Service1 from '../MedicalService/Service1'
// import Service from '../Product/Product1'

const ServicesPage = () => {
  return (
    <>
      <Service1/>
      <AIBanner/>
      <MedicalService/>
      <Nursing/>
      <HomeAssistance/>
      <MotherChildCare/>
      <ServiceBlog/>
    </>
  )
}

export default ServicesPage
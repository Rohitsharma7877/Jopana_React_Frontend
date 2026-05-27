import React from 'react'
import DoctorConsultation from '../DoctorConsultation/DoctorConsultation'
import GeneralPhysician from '../DoctorConsultation/GeneralPhysician'
import PaediatricConsultation from '../DoctorConsultation/PaediatricConsultation'
import OrthopedistConsultation from '../DoctorConsultation/OrthopedistConsultation'
import ENTSpecialist from '../DoctorConsultation/ENTSpecialist'
import Dermatologist from '../DoctorConsultation/Dermatologist'
import ServiceBlog2 from '../DoctorConsultation/ServiceBlog2'

const DoctoreConsultationPage = () => {
  return (
    <>
       <DoctorConsultation/>
       <GeneralPhysician/>
       <PaediatricConsultation/>
       <OrthopedistConsultation/>
       <ENTSpecialist/>
       <Dermatologist/>
       <ServiceBlog2/>
    </>
  )
}

export default DoctoreConsultationPage
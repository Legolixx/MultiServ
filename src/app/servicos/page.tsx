import ServicesCategories from '@/components/ServicesCategories'
import React from 'react'
import data from '@/static/data.json'


const page = () => {

  return (
    <section>
      <ServicesCategories data={data} />
    </section>
  )
}

export default page
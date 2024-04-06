
import CustomTable from '@/components/customTable/CustomTable'
import React from 'react'

export default function posi() {
  const data={
    "columns": [
      {
        "Header": "Nombre",
        "accessor": "nombre", 
        "Filter": false 
      },
      {
        "Header": "Edad",
        "accessor": "edad",
        "Filter": false 
      }
    ],
    "data": [
      {
        "nombre": "Juan",
        "edad": 30
      },
      {
        "nombre": "Ana",
        "edad": 25
      }
    ]
  }
  
  return (
    <>
    
   <CustomTable dataTable={data}/>
    </>
  )
}

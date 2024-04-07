
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
      },
      {
        "Header": "Estado",
        "accessor": "estado",
        "Filter": false
      }
    ],
    "data": [
      {
        "nombre": "Juan",
        "edad": 30,
        "estado": { "value": "Activo", "class": "f-badge-transparent" }
      },
      {
        "nombre": "Ana",
        "edad": 25,
        "estado": { "value": "Inactivo", "class": "f-badge-transparent" }
      },
    ]
  }  
  return (
    <>
    
   <CustomTable dataTable={data}/>
    </>
  )
}

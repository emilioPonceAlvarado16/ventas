
import CustomTable from '@/components/customTable/CustomTable'
import React from 'react'

export default function posi() {
  const data = {
    "columns": [
      {
        "Header": "Título del Documento",
        "accessor": "titulo",
        "Filter": false
      },
      {
        "Header": "Última Modificación",
        "accessor": "ultimaModificacion",
        "Filter": false
      },
      {
        "Header": "Estado",
        "accessor": "estado",
        "Filter": false
      },
      {
        "Header": "Acciones",
        "accessor": "actions",
        "Filter": false
      }
    ],
    "data": [
      {
        "titulo": "Propuesta de Proyecto",
        "ultimaModificacion": "2024-01-15",
        "estado": { "value": "En Revisión", "class": "f-badge-transparent" },
        "actions": ["edit", "generateLink", "delete"]
      },
      {
        "titulo": "Acta de Reunión",
        "ultimaModificacion": "2024-03-22",
        "estado": { "value": "Publicado", "class": "f-badge-transparent" },
        "actions": ["edit", "generateLink", "delete"]
      },
    ]
  };
  
  
  return (
    <>
    
   <CustomTable dataTable={data}/>
    </>
  )
}


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
        "actions": [
          { "type": "edit", "onClick": () => console.log("Editando Propuesta de Proyecto") },
          { "type": "generateLink", "onClick": () => console.log("Generando enlace para Propuesta de Proyecto") },
          { "type": "delete", "onClick": () => console.log("Eliminando Propuesta de Proyecto") }
        ]
      },
      {
        "titulo": "Acta de Reunión",
        "ultimaModificacion": "2024-03-22",
        "estado": { "value": "Publicado", "class": "f-badge-transparent" },
        "actions": [
          { "type": "edit", "onClick": () => console.log("Editando Acta de Reunión") },
          { "type": "generateLink", "onClick": () => console.log("Generando enlace para Acta de Reunión") },
          { "type": "delete", "onClick": () => console.log("Eliminando Acta de Reunión") }
        ]
      },
    ]
  };
  
  
  return (
    <>
    
   <CustomTable dataTable={data}/>
    </>
  )
}

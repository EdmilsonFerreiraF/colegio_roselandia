import Link from 'next/link'
import React from 'react'

const RequestScheduleButton = () => {
  return (
    <Link href="schedule-visit" className="schedule-visit-button">
      Solicitar agendamento
    </Link>
  )
}

export default RequestScheduleButton
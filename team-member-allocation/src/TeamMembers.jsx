import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam}) => {
  return (
	employees.map((emp) => (
		<TeamMemberCard key={emp.id} emp={emp} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
	))
  )
}

export default TeamMembers
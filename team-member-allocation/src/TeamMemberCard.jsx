import React from 'react'
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const TeamMemberCard = ({emp, handleEmployeeCardClick, selectedTeam}) => {
  return (
	<div id={emp.id} key={emp.id} className={(emp.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor:'pointer'}} onClick={handleEmployeeCardClick}>
		<img src={emp.gender === 'male' ? maleProfile : femaleProfile} className='card-image-top' alt='profilePicture' />
		<div className='card-body'>
			<h5 className='card-title'>
				Full Name: {emp.fullName}
			</h5>
			<p className='card-text'>
				<strong>Designation:</strong> {emp.designation}
			</p>
		</div>
	</div>
  )
}

export default TeamMemberCard
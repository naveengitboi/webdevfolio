


const SkillsItem = (props) => {
  const { category, skills } = props
  return (
    <div className="skillsCard">
      <p className='minifont'>{category}</p>
      <ul className="skillNames smallfont">
        {
          skills.map((skillName, i) => (
            <li key={i}>{skillName}</li>
          ))
        }
      </ul>
    </div>

  )
}


export default SkillsItem;

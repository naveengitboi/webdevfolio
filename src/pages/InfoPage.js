import React from 'react'
import InfoCardItem from '../components/InfoCardItem'
import '../css/InfoPage.css'
import { profileInfo, skillInfo, experienceInfo } from '../data'
import PageNavList from '../components/PageNavList'
import TextEffect from '../customHooks/useTextEffect.js'
import SkillsItem from '../components/SkillsItem'
import { GlowDot } from '../components/ThreeDots'
const pageContentsList = [
  {
    sectionName: 'Quote',
    sectionLink: 'quote'
  },
  {
    sectionName: 'Profile',
    sectionLink: 'profile'
  }, {
    sectionName: 'Skills',
    sectionLink: 'skill'
  },
  {
    sectionName: 'Experience',
    sectionLink: 'experience'
  },
]



function InfoPage(props) {
  return (
    <div className='infoContainer defaultPadding'>

      <PageNavList contents={pageContentsList} />
      <div className="quoteContainer" id='quote'>
        <p className='minifont heading'><GlowDot /> Quote That works for me</p>
        <div className='mainfont pretag'>
          <p className='quote mainfont'>karmany evadhikaras te <br />
            ma phalesu kadacana
            ma karma-phala-hetur <br /> bhur
            ma te sango 'stv akarmani</p>

          <p className='minifont translate'>
            You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty. <br /> <br />
            -BhagavadGita
          </p>
        </div>
      </div>

      <div className="infoGrid" id='profile'>
        {
          profileInfo.map((info, index) => (
            <InfoCardItem key={index} content={info} />
          ))
        }
      </div>

      <div className="skillsContainer" id='skill'>
        <p className='minifont'><span className='glowdot'></span> SKILLS</p>
        <div className="skillCards">
          {
            skillInfo.map((eachSkill, idx) => {
              return (
                <SkillsItem key={idx} category={eachSkill.category} skills={eachSkill.stuff} />
              )
            })
          }
        </div>
      </div>

      <div className="experienceContainer" id='experience'>
        <p className='minifont'><GlowDot /> Experience</p>

        {
          experienceInfo.map((company, index) => (
            <div key={index} className="companiesList">
              <div className="companyName">
                <h1 className='mainfont' onMouseOver={(e) => TextEffect(e)} data-initial={company.company} >{company.company}</h1>
              </div>
              <div className="describeWork">
                <h1 className='mediumfont'>{company.position}</h1>
                <p className='period minifont'>{company.interval}</p>
                <p className='description smallfont'>
                  {company.description}
                </p>
              </div>
            </div>
          ))

        }
      </div>

    </div>
  )
}

export default InfoPage

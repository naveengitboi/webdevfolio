import React from 'react'
import InfoCardItem from '../components/InfoCardItem'
import '../css/InfoPage.css'
import { profileInfo, skillInfo, experienceInfo } from '../data'

const categories = ['web dev', 'Database', 'programming', 'ai ml']


function InfoPage() {
    return (
        <div className='infoContainer'>
            <div className="aboutme">
                <p className='minifont'><span className='glowdot'></span> ABOUT ME</p>
                <h1 className='mainfont'>I'm passionate about creating beautiful products that empower people.</h1>
            </div>

            <div className="infoGrid">
                {
                    profileInfo.map((info, index) => (
                        <InfoCardItem key={index} content={info} />
                    ))
                }
            </div>

            <div className="skillsContainer">
                <p className='minifont'><span className='glowdot'></span> SKILLS</p>
                <div className="skillCards">
                    {
                        categories.map((cate, index) => {
                            const filtered = skillInfo.filter((item) => {
                                return item.category == cate
                            })
                            return (
                                <div key={index} className="skillsCard">
                                    <p className='minifont'>{cate}</p>
                                    <ul className="skillNames smallfont">
                                        {
                                            filtered.map((skillName, i) => (
                                                <li key={i}>{skillName.skill}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="experienceContainer">
                <p className='minifont'><span className='glowdot'></span> Experience</p>

                {
                    experienceInfo.map((company, index) => (
                        <div key={index} className="companiesList">
                            <div className="companyName">
                                <h1 className='mainfont'>{company.company}</h1>
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
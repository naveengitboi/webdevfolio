import React from 'react'
import InfoCardItem from '../components/InfoCardItem'
import '../css/InfoPage.css'
import { profileInfo, skillInfo } from '../data'

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

                <div className="companiesList">
                    <div className="companyName">
                        <h1 className='mainfont'>Hello</h1>
                    </div>
                    <div className="describeWork">
                        <h1 className='mediumfont'>Web Developer</h1>
                        <p className='period'>24-03-24</p>
                        <p className='description'>
                            hello bro 
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoPage
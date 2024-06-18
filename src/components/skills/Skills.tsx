import React from 'react'
import "./Skills.css"
import {skills} from "../../constants"

function Skills() {

  return (
    <section id="skills">
      <div className='skills-container'>
        <h1 className='skills-header'>Мои навыки</h1>
        <span className='skills-text'>Трудолюбивый и коммуникабельный. Люблю изучать новые технологии.
        Командный игрок, с опытом работы в зарубежных компаниях по методике Agile. Люблю и умею решать проблемы, высокая гибкость и адаптивность.
        </span>
        <div><ul className='skills-list'>
          {skills.map((element, key)=>{
            return <li key={key}>
              <legend title={element.name} ><img className='skills-img' src={element.icon} alt={element.name}></img>
              </legend>
            </li>
          })}</ul>
      </div>
      </div>
      </section>
  )
}

export default Skills

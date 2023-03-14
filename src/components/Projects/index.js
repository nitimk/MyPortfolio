import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import Todo_List from '../../assets/images/Todo_List.png'
import ExpenseTracker from '../../assets/images/ExpenseTracker.png'
import Amazon from '../../assets/images/Amazon.png'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <>
        <div className="container project-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['p', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                index={15}
              ></AnimatedLetters>
            </h1>

            <p>Here are some of the projects that I have developed</p>
          </div>
          <div className="projects">
            <ul className="row2">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nitimk/ToDo_List"
                >
                  <img src={Todo_List}  alt="ToDoList"/>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://budget-expense-tracker.netlify.app/"
                >
                  <img src={ExpenseTracker}  alt= "ExpenseTracker"/>
                </a>
              </li>

              
            </ul>

            <ul className="row1">
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/nitimk/Amazon">
                  <img src={Amazon} alt="Amazon Clone" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Projects
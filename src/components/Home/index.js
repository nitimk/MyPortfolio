// import LogoTitle from '../../assets/images/n.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
//import Logo from './Logo'
import Loader from 'react-loaders'
// import coding from '../../assets/images/coding.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['N','i', 't', 'i']
  const positionArray = [
    'F',
    'u',
    'l',
    'l',
    '',
    'S',
    't',
    'a',
    'c',
    'k',
    '',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]
   const studentArray = [""]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <>
      <div className="homepage container">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <span className={`${letterClass} _14`}> </span>
            {/* <img  className= "coding" src={coding} alt= "coding"></img> */}
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={positionArray}
              index={19}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={studentArray}
              index={22}
            />
          </h1>
           {/* <h2>MERN Stack / Python / AWS</h2> */}
          <Link to="/contact" className="flat-button">
            contact me
          </Link>
        </div>
      </div>
      {/* <div className= "coding">
      <img src={coding} alt= "coding"></img>
      </div> */}
      
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Home

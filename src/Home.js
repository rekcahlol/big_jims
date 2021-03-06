import styled from "styled-components"
import { PageTrans } from "./animations"
import { motion } from "framer-motion"
import { useState } from "react"
import data from "./serviceData"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

const Home = () => {
  const services = data()
  const [ text, setText ] = useState(services[ 0 ])
  const [ image, setImage ] = useState(services[ 0 ])

  return (
    <HomeContainer>
      <Nav />
      <ServiceContainer
        variants={PageTrans}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Info>
          <div className="title">
            <h1>Big Jims</h1>
            <h2>Custom Exhaust</h2>
          </div>
          <Service>
            <ButtonContainer>
              <button
                className="allsides-6"
                onClick={(e) => {
                  e.preventDefault()
                  setText(services[ 0 ])
                  setImage(services[ 0 ])
                }}
              >
                <h5>Custom</h5>
              </button>
              <button
                className="allsides-6"
                onClick={(e) => {
                  e.preventDefault()
                  setText(services[ 1 ])
                  setImage(services[ 1 ])
                }}
              >
                <h5>Performance</h5>
              </button>
              <button
                className="allsides-6"
                onClick={(e) => {
                  e.preventDefault()
                  setText(services[ 2 ])
                  setImage(services[ 2 ])
                }}
              >
                <h5>Repair</h5>
              </button>
            </ButtonContainer>
            <ServiceDetails>
              <img src={image.img} alt="" />

              <div className="text">
                <p>{text.text}</p>
              </div>
              <img src={image.img1} alt="" />
            </ServiceDetails>
          </Service>
        </Info>

      </ServiceContainer>
      <Footer />
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  background-color: #000;
`
const ServiceContainer = styled(motion.div)`
  position: relative;
  height: fit-content;
  width: 100%;
  display: grid;
  place-content: center;
  padding-bottom: 2rem;
`

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
height: 400px;
justify-content: space-between;
margin-right: 1.5rem;
`

const Info = styled.section`
  width: 100%;
  height: fit-content;
  margin: 5rem 0;
  color: #fff;
  background-color: #000;
  display: flex;
  flex-direction: column;


  .title {
    padding-bottom: 5rem;
    padding-left: 3rem;
    line-height: 5rem;

    @media screen and (max-width: 1400px) {
      text-align: center;

      h1 {
        transform: translateX(-200px);
      }
    }
    @media screen and (max-width: 1000px) {
      h1,
      h2 {
        font-size: 3rem;
      }
      h1 {
        transform: translateX(-120px);
      }
    }
    @media screen and (max-width: 500px) {
      h1,
      h2 {
        transform: translateX(-20px);
        font-size: 2.2rem;
        padding-left: 0;
        line-height: 4rem;
        text-align: center;
      }
    }
  }

  h1 {
    font-size: 5rem;
    text-transform: uppercase;
  }
  h2 {
    font-size: 5rem;
    color: gray;
    text-transform: uppercase;
  }
`

const Service = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  button {
    padding: 15px;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1.3rem;
    color: #8a8987;
    width: 150px;   
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    button {
      margin: 0 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    display: grid;
    place-content: center;

    button {
      margin: 1rem 0;
    }
  }
`

const ServiceDetails = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 300px;
    height: auto;
  }

  p {
    font-size: 1em;
    font-weight: 400;
  }

  .text {
    display: grid;
    place-content: center;
    padding: 1rem;
    width: 300px;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: #d6d6d6;
    line-height: 2rem;
  }

  @media screen and (max-width: 1350px) {
    width: 100%;
    display: grid;
    place-content: center;
    padding: 0;
    margin: 0;

    .text {
      width: 300px;
      text-align: center;
    }
  }
`

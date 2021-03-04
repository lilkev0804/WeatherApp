import React from 'react'
import styled from 'styled-components'


function GeneralInformation(props) {
const Infoelementtitle = styled.div`
    color: white;
    text-align:center;
    display:flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    text-shadow : 1px 1px black;
`
const Img = styled.img`
    objectif-fit:contain;
    width: 200px;
    height: 10vh;
`
const Hours = styled.span`
    font-size:2rem;
`
const ActualTemp = styled.p`
    color: white;
    margin-top:-5px;
    font-size: 2rem;
`
const City = styled.p`
    font-weight: 800;
    font-size:2rem;
`
const CityHours = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
    return (
        <Infoelementtitle>
                <CityHours>
                    <City> {props.city}  </City> <Hours> {props.hours}</Hours>
                </CityHours>
                <Img src={`img/${props.img}.svg`}></Img> 
                <ActualTemp>{props.temp} °C</ActualTemp>
        </Infoelementtitle>
      
    )
}

export default GeneralInformation
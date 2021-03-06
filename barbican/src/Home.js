import React from 'react'
import styled from 'styled-components';
import { Dropdown, DropdownButton,Image, Button, Jumbotron as Jumbo, Container } from 'react-bootstrap';
// eslint-disable-next-line
import backVideo from './Assets/backVideo.mp4';
// eslint-disable-next-line
import boat from './Assets/boat.jpg';
import newsletters from './Assets/newsletters.png';

const Styles = styled.div `

    h1{
        font-family: Futura-Book,Arial,Helvetica,sans-serif;
        font-size: 5rem;
        font-weight: bold;
    }

    .jumbotron{
       background: url(${backVideo}) no-repeat fixed bottom;
       background-size: cover;
       color: white;
       height: 600px;
       position: relative;
       z-index: -2;
       margin-bottom: 0;
    }

    button{
        font-weight: bold;
    }

    .welcomeBtn{
        z-index: 1;
        background-color: #ff5900;
        border-color: #ff5900;
        margin-top: 20px;
        
    }

    video{
        position: absolute; 
        right: 0; 
        bottom: 0;
        min-width: 100%; 
        min-height: 100%;
        width: auto; 
        height: auto; 
        z-index: -100;
        background-size: cover;
        overflow: hidden;
    }

    .overlay{
        background-color: #222;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .newsLetter{
        background-color: #ff5900;
        height: 180px;
        font-weight: bold;
        display: flex;
    }

    .pictureContainer{
        margin-left: 30%;
        margin-right: 0;
    }

    #signUp{
        color: white;
        font-size: 2rem;
        padding-left: 40px;
        
    }

    .newsButton{
        color: #ff5900;
        background-color: white;
        border-color: #ff5900;
        height: 50px;
        margin-left: 20px;
        margin-top: 50px;
    }

    img{
        height: 150;
        max-width:100%;
        max-height:100%;
        margin-right: 0;

       
    }
    
    .footer{
        height: 100%;
        background-color: #1d1d1d;
        color:white;
        padding-bottom: 10px;
        margin-bottom: 0;

        h2{
            padding-top: 30px;
            font-size: 2.5rem;
        }

        #first{
            font-size: 1.5rem;
        }

        #dropdown-item-button{
            background-color: #1D1D1D;
            border-color: white;
            width: 400px;
            text-align: left;
        }

        h3{

        }

        #second{
            
        }
    }
`;

export const Home = () => (
    <Styles>
        <Jumbo className="jumbo">
            <div className="overlay">
                <video autoPlay="autoPlay" loop="loop" muted className="promoVideo">
                    <source src={backVideo} type="video/mp4"/>
                </video>
            </div>
            
            <Container className="welcomeText">
                <h1>Welcome to</h1>
                <h1>the Barbican</h1>
                <Button className="welcomeBtn" variant="primary" size="lg">
                    -> Read, watch & listen
                </Button>{' '}
            </Container>
        </Jumbo>

        <div className="newsLetter">
            <div className="pictureContainer">
                <Image src={newsletters}></Image>
            </div>

            <p id="signUp">  Sign up to our newsletter</p>
            <Button className="newsButton" variant="primary" size="lg">
                        -> Sign up
            </Button>{' '}
        </div>

        <div className="footer">
            <h2>Contact us</h2>
            <p id="first">About</p>
            <DropdownButton id="dropdown-item-button" title="Your booking">
                <Dropdown.Item as="button">Feedback</Dropdown.Item>
                <Dropdown.Item as="button">Membership</Dropdown.Item>
                <Dropdown.Item as="button">Hiring value</Dropdown.Item>
            </DropdownButton>
            <h3>Contact the Box office</h3>
            <p id="second">For queries relating to you booking, please see our FAQs or contact us on:</p>
            <h4>tickets@barbican.org.uk</h4>
            <p id="third">We aim to respong within 24 hrs</p>
        </div>
    </Styles>
)

/*<div>
    <video autoPlay="autoPlay" loop="loop" muted className="promoVideo">
        <source src={backVideo} type="video/mp4"/>
    </video>

    <div className="promoText"> 
        <p>Tere</p>
    </div>
</div>*/
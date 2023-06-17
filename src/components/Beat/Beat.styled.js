import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const BeatContainer = styled.div`
    width: ${props => props.timeDuration * 400}px;
    h4 {
        margin: 5px;
    }

    @media (min-width: 600px) {
        width: ${props => props.timeDuration * 400}px;
    }
    @media (min-width: 900px) {
        width: ${props => props.timeDuration * 400}px;
    }
    
    @media (min-width: 1200px) {
        width: ${props => props.timeDuration * 400}px;
    }
    
     @media (min-width: 1800px) {
        width: ${props => props.timeDuration * 400}px;
    }
`;

export const BeatBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 15px 15px;
    background-color: #293439;
    border-radius: 10px;
    border-radius: 10px;

    h3 {
        font-size: 1.5em;
        margin-bottom: 0px;
    }

    h4 {
        font-size: .7em;
    }

    p {
        font-size: .5em;
    }
`;

export const BeatHeader = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
`;

export const BeatHeaderLeft = styled.div`
    width: 50px;
`;

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
`;

export const BeatHeaderRight = styled.div`
    align-self: flex-end;
    padding-right: 5px;
    padding-top: 5px;
    &:hover {
        animation: ${scaleUp} 0.3s ease-in-out forwards;
        cursor: pointer;
    }

`;

export const BeatFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const BeatLeftFooter = styled.div`
    width: 50px;
`;

export const BeatRightFooter = styled.div`
    align-items: flex-start;
    h4 {
        font-size: .7em;
        margin-left: 0;
    }
`;

export const CreateBeatTitle = styled.h1`
    margin-bottom: 5px !important;
`;

export const IconWrapper = styled.div`
    @media (min-width: 600px) {
        font-size: 1.5em;
    }
    p {
        margin-top: 2px !important;
    }
`;

export const Meta = styled.div`
    h4 {
        margin-bottom: 10px;
    }

    p {
        margin: 0px;
    }
`;

export const DisplayFields = styled.div`
    display: flex;
    position: relative;
    height: 200px;
    top: -15px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex-direction: column;
    justify-content: space-bewteen;
    overflow: auto;
    h4 {
        text-align: left; 
        margin-bottom: 10px;
        margin-left: 0px
    }

    p {
        text-align: left; 
        margin-left: 0px;
    }
`;

export const Notes = styled.div`
    display: flex;
    flex-direction: column;
    h5 {
        margin: 0px;
    }
    p {
        text-align: left; 
        margin: 0px;
    }

`;

export const TimeWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;

    p {
        margin-right: 2px;
    }
`;

export const CreateBeatWrapper = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    background-color: #293439;
    border-radius: 10px;
    border-radius: 10px;
    margin-top: 2px;
    @media (min-width: 600px) {
        width: 100px;
        height: 110px;
    }
    @media (min-width: 900px) {
        width: 200px;
        height: 220px;
    }
    
    @media (min-width: 1200px) {
        width: 200px;
        height: 220px;   
    }
    
     @media (min-width: 1800px) {
        width: 200px;
        height: 220px;
    }
`;
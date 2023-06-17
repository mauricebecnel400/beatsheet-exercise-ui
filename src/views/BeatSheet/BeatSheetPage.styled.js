import styled from 'styled-components';

export const Container = styled.div`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 50px;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const Header = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #40434E;
    padding: 10px;
    padding-left: 25px;
`;

export const HeaderLeft = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 30px;
    gap: 10px;
`;

export const HeaderRight = styled.div`
    display: flex;
    position: relative;
    right: 5%;
    justify-content: space-between;
    @media (max-width: 500px) {
        right: 15%;
    }
`;

export const NewActButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 500px) {
        width: 50px;
        height: 50px;
        justify-content: center;
        font-size: 1.5em;
        div {
            display: none;
        }
    }
`;
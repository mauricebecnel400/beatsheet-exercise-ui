import styled from 'styled-components';

export const ActWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    width: 100%;
    margin: 10px;
`;

export const ActHeader = styled.div`
    display: flex;
`;

export const Tile = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    alignt-items: center;
    height: 25px;
    min-width: 150px;
    padding: 5px;
    font-size: 100%;
    background-color: #9AA6AB;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const LeftHeader =  styled.div`
    display: flex;
    padding: 5px;
    justify-content: flex-end;
    gap: 5px;
    width: 85%;
    border-top-style: dotted;
    border-top-width: 2px;
    border-top-color: #9AA6AB;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 500px) {
        justify-content: center;
        width: 50px;
        height: 50px;
        font-size: .75em;
        div {
            display: none;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: horizontal;
    align-items: flex-start;
    margin-top: 20px;
    gap: 15px;
    padding-top: 15x;
    width: 100%;
    overflow-x: auto;
`;
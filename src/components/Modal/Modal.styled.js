import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
`;

export const ModalWrapper = styled.div`
    width: 400px;
    height: 300px;
    background-color: #293439;
    padding: 1.5em;
    border-radius: 10px;
`;
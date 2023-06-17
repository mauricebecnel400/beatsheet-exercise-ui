import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    height: 30px;
`;

export const Input = styled.input`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
`;

export const InputButton = styled.button`
    all: unset;
    width: 20px;
    cursor: pointer;
    margin: 5px;

    &:disabled {
        cursor: not-allowed;
    }
`
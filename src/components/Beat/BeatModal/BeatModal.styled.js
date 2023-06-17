import styled from 'styled-components';

export const Header = styled.div`
    h3 {
        margin: 5px 5px 5px 0;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 240px;
    overflow: scroll;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 70%;
    margin-bottom: 15px;
`;

export const FormFieldArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 90%;
    margin-bottom: 15px;
`

export const FormButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 10px;
`;

export const ButtonsRight = styled.div`
    margin-right: 20px;
    display: flex;
    gap: 10px;
`;

export const ButtonsLeft = styled.div`
    display: flex;
    gap: 10px;

`;
import styled from 'styled-components';

export const Header = styled.div`
    h3 {
        margin: 5px 5px 5px 0;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
    overflow: scroll;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 70%;
    margin-bottom: 15px;
`;

export const FormButtons = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 10px;
`;
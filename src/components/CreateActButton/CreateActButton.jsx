import React, { useState } from 'react';

import { InputWrapper, Input, InputButton } from './CreateActButon.styled';

export const CreateActButton = ({ onSave }) => {

    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <InputWrapper>
                <Input 
                    type="text"
                    onChange={({ target: { value }}) => setName(value)}
                    placeholder="Name of Act"
                />
                <InputButton onClick={() => onSave(name)} disabled={name === ''} >✓</InputButton>
                <InputButton onClick={() => setIsEditing(false)} > X </InputButton>
            </InputWrapper>
        )
    }

    return (
        <button onClick={() => setIsEditing(true)}> 
            + Create New Act
        </button>
    );
};

export default CreateActButton;
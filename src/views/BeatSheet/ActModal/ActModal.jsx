import React, { useEffect, useState } from 'react';

import Modal from '../../../components/Modal';

import { Form, FormField, FormButtons, Header } from './ActModal.styled';

export const ActModal = ({ 
  defaultValues = {},
  onClose,
  onSubmit,
  show, 
  isEditing
}) => {
  const {
    name: defaultName
  } = defaultValues;

  const [name, setName] = useState(defaultName);

  useEffect(() => {
    setName(defaultName);
  }, [defaultName]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  const handleOnClose = () => {
    setName('');
    onClose();
  }

  return (
    <Modal show={show} size="300">
        <Header>
            <h3> { isEditing ? 'Edit Act' : 'Create a New Act' }</h3>
        </Header>
        <Form onSubmit={handleOnSubmit}>
            <FormField>
                <>Name</>
                <input 
                  type="text" 
                  name="name" 
                  value={name} 
                  onChange={(event) => setName(event.target.value)}
                />
            </FormField>
            <FormButtons>
                <button type="submit"> Save </button>
                <button type="button" onClick={handleOnClose}> Cancel </button>
            </FormButtons>
        </Form>
    </Modal>
  );
};

export default ActModal;
import React, { useEffect, useState } from 'react';

import Modal from '../../Modal';

import { Form, FormField, FormFieldArea, FormButtons, ButtonsRight, ButtonsLeft, Header } from './BeatModal.styled';

export const BeatModal = ({ 
  defaultValues = {},
  onClose,
  onSubmit,
  onDelete,
  show, 
  isEditing
}) => {
  const {
    name: defaultName,
    time: defaultTime,
    content: defaultContent,
    cameraAngle: defaultCameraAngle,
    notes: defaultNotes,
  } = defaultValues;

  const [name, setName] = useState(defaultName);
  const [time, setTime] = useState(defaultTime);
  const [content, setContent] = useState(defaultContent);
  const [cameraAngle, setCameraAngle] = useState(defaultCameraAngle);
  const [notes, setNotes] = useState(defaultNotes);

  useEffect(() => {
    setName(defaultName);
    setTime(defaultTime);
    setContent(defaultContent);
    setCameraAngle(defaultCameraAngle);
    setNotes(defaultNotes);

    return () => {
      setName('');
      setTime('');
      setContent('');
      setCameraAngle('');
      setNotes('');
    }
  }, [defaultName, defaultTime, defaultContent, defaultCameraAngle, defaultNotes]);

  const handleOnClose = () => {
    setName('');
    setTime('');
    setContent('');
    setCameraAngle('');
    setNotes('');
    onClose();
  }

  const handleOnDelete = () => {
    onDelete();
    handleOnClose();
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, time, content, cameraAngle, notes });
    handleOnClose();
  };

  return (
    <Modal show={show}>
        <Header>
            <h3> { isEditing ? 'Edit Beat' : 'Create a Beat' }</h3>
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
            <FormField>
                <>Time</>
                <input 
                  type="text" 
                  name="time" 
                  value={time} 
                  onChange={(event) => setTime(event.target.value)}
                />
            </FormField>
            <FormField>
                <>Camera Angle</>
                <input 
                  type="text" 
                  name="cameraAngle" 
                  value={cameraAngle} 
                  onChange={(event) => setCameraAngle(event.target.value)}
                />
            </FormField>
            <FormFieldArea>
                <>Content</>
                <textarea 
                  type="text" 
                  name="content" 
                  cols="40" 
                  rows="5" 
                  value={content} 
                  onChange={(event) => setContent(event.target.value)}
                />
            </FormFieldArea>
            <FormFieldArea>
                <>Notes</>
                <textarea 
                  type="text" 
                  name="notes" 
                  cols="40" 
                  rows="5" 
                  value={notes} 
                  onChange={(event) => setNotes(event.target.value)}
                />
            </FormFieldArea>
            <FormButtons>
                <ButtonsRight>
                  <button type="submit"> Save </button>
                  <button type="button" onClick={handleOnClose}> Cancel </button>
                </ButtonsRight>
                {
                  isEditing ? (
                  <ButtonsLeft>
                    <button type="button" onClick={handleOnDelete}> Delete </button>
                  </ButtonsLeft>
                  ) : null
                }
            </FormButtons>
        </Form>
    </Modal>
  );
};

export default BeatModal;
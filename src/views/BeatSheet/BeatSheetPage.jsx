import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faBullhorn } from '@fortawesome/free-solid-svg-icons';

import Act from '../../components/Act';
import CreateActButton from '../../components/CreateActButton';
import { createAct, getActs, deleteAct } from '../../api/beatsheet';
import ActModal from './ActModal';

import { Container, Header, HeaderLeft, HeaderRight, NewActButton } from './BeatSheetPage.styled';

export const BeatSheetPage = () => {
    
    const [acts, setActs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getActs()
            .then(data => setActs(data))
            .catch((e) => console.log(e));
    }, []);

    const handleSaveNewAct = useCallback((name) => {
        createAct(name)
            .then((fetchedAct) => {
                const newActs = JSON.parse(JSON.stringify(acts));
                newActs.push(fetchedAct);
                setActs(newActs);
                setShowModal(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [acts, createAct]);

    const handleDeleteAct = useCallback((actId) => {
        deleteAct(actId)
            .then(() => {
                const clonedActs = JSON.parse(JSON.stringify(acts));
                const indexOfDuplicate = clonedActs.findIndex(item => item.id === actId);
                if (indexOfDuplicate !== -1) {
                    clonedActs.splice(indexOfDuplicate, 1);
                }
                setActs(clonedActs);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [acts]);

    return (
        <>
            <ActModal show={showModal} onClose={() => setShowModal(false)} onSubmit={handleSaveNewAct}/>
            <Header>
                <HeaderLeft>
                    <>Beat Sheet Creator</>
                    <FontAwesomeIcon icon={faBullhorn} />
                </HeaderLeft>
                <HeaderRight>
                    <NewActButton onClick={() => setShowModal(true)}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <div>Create New Act</div>
                    </NewActButton>
                </HeaderRight>
            </Header>
            <Container>

                {acts.length > 0 ? (
                    acts.map(({ id, name }) => (
                        <Act 
                            key={id} 
                            name={name} 
                            id={id} 
                            onDelete={handleDeleteAct}
                        />
                    ))
                ) : (<CreateActButton onSave={handleSaveNewAct} />) }
            </Container>
        </>
    )
}

export default BeatSheetPage;
import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

import BeatModal from '../Beat/BeatModal';
import Beat from '../Beat';
import { createBeat, getBeats, updateBeat, deleteBeat } from '../../api/beatsheet';

import { ActWrapper, ActHeader, Tile, Content, LeftHeader, Button } from './Act.styled';


export const Act = ({ id, name, onDelete }) => {
    const [fetchedBeats, setFetchedBeats] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getBeats(id)
            .then(data => setFetchedBeats(data))
            .catch((e) => console.log(e));
    }, [id]);

    const handleCreateBeat = useCallback((beatData) => {
        createBeat(id, beatData)
            .then((data) => {
                const clonedBeats = JSON.parse(JSON.stringify(fetchedBeats));
                clonedBeats.push(data);
                setFetchedBeats(clonedBeats);
                getBeats(id)
                    .then(data => setFetchedBeats(data))
                    .catch((e) => console.log(e));
                setShowModal(false);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [id, fetchedBeats]);

    const handleEditBeat = useCallback((beatId, beatData) => {
        updateBeat(beatId, beatData)
            .then(() => {
                const clonedBeats = JSON.parse(JSON.stringify(fetchedBeats));
                const indexOfDuplicate = clonedBeats.findIndex(item => item.id === beatId);
                if (indexOfDuplicate !== -1) {
                    clonedBeats.splice(indexOfDuplicate, 1, beatData);
                }
                setFetchedBeats(clonedBeats);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [fetchedBeats]);

    const handleDeleteBeat = useCallback((beatId) => {
        deleteBeat(id, beatId)
            .then(() => {
                getBeats(id)
                    .then(data => setFetchedBeats(data))
                    .catch((e) => console.log(e));
            })
            .catch((e) => {
                console.log(e);
            })
    }, [id, fetchedBeats]);

    return (
        <>
            <BeatModal 
                show={showModal} 
                onClose={() => setShowModal(false)} 
                onSubmit={handleCreateBeat} 
            />
            <ActWrapper>
                <ActHeader>
                    <Tile>{name}</Tile>
                    <LeftHeader>
                        { fetchedBeats.length > 0 ? (
                            <Button onClick={() => setShowModal(true)}>
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <div>Create New Beat </div>
                        </Button>
                        ) : null
                        }   
                        <Button onClick={() => onDelete(id)}>
                            <FontAwesomeIcon icon={faTrash} />
                            <div>Delete Act</div>
                        </Button>
                    </LeftHeader>
                </ActHeader>
                <Content> 
                    { fetchedBeats.length > 0 ? 
                    fetchedBeats.map((data) => (
                        <Beat 
                            key={data.id} 
                            onCreate={handleCreateBeat} 
                            onEdit={handleEditBeat}
                            onDelete={handleDeleteBeat}
                            {...data}
                        />
                    )) : 
                    <Beat onCreate={handleCreateBeat} />
                    }
                </Content>
            </ActWrapper>
        </>
    );
};

export default Act;
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faClock, faPencil } from '@fortawesome/free-solid-svg-icons';

import BeatModal from './BeatModal';

import { 
    BeatBody, 
    BeatContainer,
    BeatFooter,
    BeatLeftFooter,
    BeatRightFooter,
    BeatHeader,
    BeatHeaderLeft,
    BeatHeaderRight,
    CreateBeatWrapper, 
    Meta,
    Notes,
    DisplayFields,
    IconWrapper, 
    TimeWrapper 
} from './Beat.styled';


export const Beat = (props) => {
    const { 
        id, 
        name,
        time,
        content,
        cameraAngle,
        notes,
        onCreate, 
        onEdit,
        onDelete
    } = props;


    const [showModal, setShowModal] = useState(false);
    const [timeDuration, setTimeDuration] = useState(0);
    
    const editModalData = useMemo(() => ({
        name,
        time,
        content,
        cameraAngle,
        notes,
    }), [ name, time, content, cameraAngle, notes,]);


    useEffect(() => {
        if (time) {
            const [startTimeString, endTimeString] = time.split('-');
            const calculatedTimeDifference =  timeDifference(startTimeString, endTimeString);
            setTimeDuration(calculatedTimeDifference);
        }
    }, [time]);


    const timeDifference = useCallback((time1, time2) => {
        const date1 = new Date("1970-01-01 " + time1);
        const date2 = new Date("1970-01-01 " + time2);

        if (date2 < date1) {
            date2.setHours(date2.getHours() + 12);
        }

        const diff = Math.abs(date2.getTime() - date1.getTime());

        const hours = parseFloat((diff / 1000 / 60 / 60).toFixed(1));

        return hours;
      }, []);

    const handleCreateBeat = useCallback((data) => {
        onCreate(data);
        setShowModal(false);
    }, []);

    const handleUpdateBeat = useCallback((data) => {
        onEdit(id, data);
        setShowModal(false);
    }, [id]);

    const handleDeleteBeat = useCallback(() => {
        onDelete(id);
        setShowModal(false);
    }, []);

    if (!id && !name) {
        return (
        <>
            <BeatModal show={showModal} onClose={() => setShowModal(false)} onSubmit={handleCreateBeat} />
            <CreateBeatWrapper onClick={() => setShowModal(true)} >
                <IconWrapper>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </IconWrapper>
                <p> Create a New Beat</p>
            </CreateBeatWrapper>
        </>
        )
    }

    return (
        <div key={id}>
            <BeatModal 
                show={showModal} 
                onClose={() => setShowModal(false)} 
                onSubmit={handleUpdateBeat} 
                onDelete={handleDeleteBeat}
                isEditing
                defaultValues={editModalData}
            />
            <BeatContainer timeDuration={timeDuration}>
                <BeatBody>
                    <BeatHeader>
                        <BeatHeaderLeft/>
                        <BeatHeaderRight >
                            <FontAwesomeIcon icon={faPencil} size="xs" onClick={() => setShowModal(true)}/>
                        </BeatHeaderRight>
                    </BeatHeader>
                    <DisplayFields>
                        <h4>{content}</h4>
                        <Notes>
                            <strong><p>notes:</p></strong>
                            <p>{notes}</p>
                        </Notes>
                    </DisplayFields>
                    <Meta>
                        <p>{cameraAngle}</p>
                        <TimeWrapper>
                            <p><FontAwesomeIcon icon={faClock} /></p>
                            <p>{time}</p>
                        </TimeWrapper>
                    </Meta>
                </BeatBody>
                <BeatFooter>
                    <BeatRightFooter>
                        <h4>{name}</h4>
                    </BeatRightFooter>
                    <BeatLeftFooter/>
                </BeatFooter>
            </BeatContainer>
        </div>
    );
};

export default Beat;
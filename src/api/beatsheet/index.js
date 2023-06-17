
export const getActs = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BEAT_SHEET_API_HOST}/acts`);
        const acts = await response.json();
        return acts;
    } catch (e) {
        return e;
    }
 };

export const createAct = async (actName) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BEAT_SHEET_API_HOST}/acts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ name: actName }),
        });
        const newAct = await response.json();
        return newAct;
    } catch (e) {
        return e;
    }
};

export const deleteAct = async (actId) => {
    try {
        await fetch(`${import.meta.env.VITE_BEAT_SHEET_API_HOST}/acts/${actId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (e) {
        return e;
    }
}

export const getBeats = async (actId) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BEAT_SHEET_API_HOST}/acts/${actId}/beats`);
        const beats = await response.json();
        return beats;
    } catch (e) {
        return e;
    }
 };


export const createBeat = async (actId, beatData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BEAT_SHEET_API_HOST}/acts/${actId}/beats`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(beatData),
        });
        const newBeat = await response.json();
        return newBeat;
    } catch (e) {
        return e;
    }
};

export const updateBeat = async (beatId, beatData) => {
    try {
        await fetch(`${import.meta.env.VITE_BEAT_SHEET_API_HOST}/acts/beats/${beatId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(beatData),
        });
    } catch (e) {
        return e;
    }
};

export const deleteBeat = async (actId, beatId) => {
    try {
        await fetch(`${import.meta.env.VITE_BEAT_SHEET_API_HOST}/acts/${actId}/beats/${beatId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (e) {
        return e;
    }
}
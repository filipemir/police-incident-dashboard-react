import mockData from './data/1day';

let counter = 0;

// Mocked version of the client returning mocked data, to develop offline
export async function getIncidents() {
    const incidents = await new Promise(resolve => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000);
    });

    return incidents.map(r => {
        counter += 1;
        return { ...r, _clientSideId: `_i${counter}` };
    });
}

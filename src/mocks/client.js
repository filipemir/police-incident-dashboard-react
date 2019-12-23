import mockData from './data/1day';

// Mocked version of the client returning mocked data, to develop offline
export async function getIncidents() {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000);
    });
}

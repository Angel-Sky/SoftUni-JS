const api = {
    locations: 'locations',
    current: 'forecast/today/',
    upcoming: 'forecast/upcoming/'
};

function host(path) {
    return `https://judgetests.firebaseio.com/${path}.json`
}

export async function getCodeAsync(name) {
    //.json() returns promise, that's why we need double await
    const data = await (await fetch(host(api.locations))).json(); 
    return data.find(x => x.name.toLowerCase() == name.toLowerCase()).code;
}

export async function getCurrentForcastAsync(code) {
    return await (await fetch(host(api.current + code))).json();
}

export async function getUpcomingForcastAcync(code) {
    return await (await fetch(host(api.upcoming + code))).json();
}


const restApiKey = `B7574A3E-819E-4F52-9D68-4E4225CC91A0`;
const baseUurl = `https://api.backendless.com/2F02C9F4-7AC7-7C82-FF45-EF14B3A51B00/${restApiKey}`;
const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    teams: '/data/teams',
    update_user: '/users/'
}

export async function register(username, password) {
    return (await fetch(baseUurl + endpoints.register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();

}

export async function login(username, password) {
    return (await fetch(baseUurl + endpoints.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
            password
        })
    })).json();
}

export async function createTeam(team) {
    const token = localStorage.getItem("userToken");
    if (!token) {
        throw new Error("You need to be logged in to create a team");
    }

    const result = await (await fetch(baseUurl + endpoints.teams, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(team)
    })).json();

    if (result.hasOwnProperty("errorData")) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    const updateResult = await setUserTeamId(result.ownerId, result.objectId);

    if (updateResult.hasOwnProperty("errorData")) {
        const error = new Error();
        Object.assign(error, updateResult);
        throw error;
    }

    return result;
}


async function setUserTeamId(userId, teamId) {
    const token = localStorage.getItem("userToken");
    if (!token) {
        throw new Error("You need to be logged in");
    }
    return (await fetch(baseUurl + endpoints.update_user + userId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({ teamId })
    })).json();
}

export async function getTeams() {
    return (await fetch(baseUurl + endpoints.teams)).json();
}

export async function getTeamById(id) {
    return (await fetch(baseUurl + endpoints.teams + '/' + id)).json();
}

export async function logout() {
    const token = localStorage.getItem("userToken");
    if (!token) {
        throw new Error("You need to be logged in");
    }

    return (fetch(baseUurl + endpoints.logout, {
        method: 'GET',
        headers: {
            'user-token': token
        }
    }))

}
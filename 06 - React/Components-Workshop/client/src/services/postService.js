async function getAll() {
    return (await fetch('http://localhost:5000/posts')).json()
}

export default {
    getAll
}
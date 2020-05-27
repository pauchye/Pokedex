export const fetchAllPokemon = () => {
    return $.ajax({
        method: 'get',
        url: "/api/pokemon"
    });
};

export const fetchOnePokemon = id => {
    return $.ajax({
        method: 'GET',
        url: `api/pokemon/${id}`
    })
};
const baseUrl = `${process.env.REACT_APP_API_URL}`
// const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;

export const evaluate = (context) => {
    return fetch(`${baseUrl}/evaluate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(context)
    }).then((response) => response.json());
}
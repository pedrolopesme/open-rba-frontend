const baseUrl = `${process.env.OPEN_RBA_HOST}`

export const evaluate = (context) => {
    return fetch(`${baseUrl}/evaluate`, {
        method: 'POST',
        headers: {
            'Context-Type': 'application/json',
        },
        body: JSON.stringify(context)
    }).then((response) => response.json());
}
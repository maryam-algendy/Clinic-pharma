export const BaseURL = process.env.REACT_APP_BETA_AI_API_BASE_URL;

export default function API(endpoint, method = "GET", data = {}) {

    let body;
    if (method !== "GET" && method !== "DELETE") {
        body = new FormData();
        for(let k in data) {
            body.append(k, data[k]);
        }
    }

    return fetch(
        BaseURL + "/" + endpoint,
        {
            method,
            headers: {
                Authorization: localStorage.getItem("access-token")
            },
            body,
            mode: "cors",
        }
    ).then(r => r.json().then(data => ({data, status: r.status})))
}

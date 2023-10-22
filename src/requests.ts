class Request {
    private readonly HOST = "http://localhost:4000";

    constructor() {}

    public async get(url: string): Promise<any> {
        const response = await fetch(url);
        return response.json();
    }

    public async put(url: string, payload: any): Promise<any> {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        };

        const response = await fetch(url, requestOptions);
        return response.json();
    }

    public async post(url: string, payload: any): Promise<any> {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        };

        const response = await fetch(url, requestOptions);
        return response.json();
    }
}

export const request = new Request();

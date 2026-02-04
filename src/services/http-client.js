export class HTTPClient {
    #api = 'http://localhost:3000';

    /**
     * Send GET request to endpoint
     * @param {string} endpoint 
     * returns Promise<Response>
     */
    async get(endpoint) {

        const response = await fetch(
            `${this.#api}${endpoint}`,
        );

        if (!response.ok) {
            const error = new Error(`HTTP status: ${response.status} : ${response.statusText}`);
            error.status = response.status;
            error.response = response;
            throw error;
        }
        return response.json();
    }

    async post(endpoint, payload) {
        const response = await fetch(
            `${this.#api}${endpoint}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        ); 
        if (!response.ok) {
            const error = new Error(`HTTP status: ${response.status} : ${response.statusText}`);
            error.status = response.status;
            error.response = response;
            throw error;
        }
        return response.json();
    }

        async delete(endpoint, payload) {
        const response = await fetch(
            `${this.#api}${endpoint}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );
        if (!response.ok) {
            const error = new Error(`HTTP status: ${response.status} : ${response.statusText}`);
            error.status = response.status;
            error.response = response;
            throw error;
        }
        return response.json();
    }

    async put(endpoint, payload) {
        const response = await fetch(
            `${this.#api}${endpoint}`, 
            {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );
                if (!response.ok) {
            const error = new Error(`HTTP status: ${response.status} : ${response.statusText}`);
            error.status = response.status;
            error.response = response;
            throw error;
        }
        return response.json();
    }
}

//essayer de communiquer avec le backend
const httpClient = new HTTPClient();

const consumer = async () => {
    // const response = await httpClient.get('collection');
    // console.log(`Response status: ${response.status}`);
    // const payload = await response.json();
    // console.table(payload);

    try {
        const payload = await httpClient.get('collection');
        console.table(payload);
    } catch (error) {
        console.error(`${error.status} - ${error.response.statusText}`);
    }
}

// Call the function
// consumer();
// HttpHelper.js

const apiUrl = "https://dummyjson.com/"; // Replace with your API URL

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

const headers = {
    'Content-Type': 'application/json',
    // Add any other headers as needed
};

const HttpHelper = {
    get: async (endpoint) => {
        try {
            const response = await fetch(`${apiUrl}${endpoint}`, {
                method: 'GET',
                headers,
            });
            handleErrors(response);
            return response.json();
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    },

    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${apiUrl}${endpoint}`, {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });
            handleErrors(response);
            return response.json();
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    },

    put: async (endpoint, data) => {
        try {
            const response = await fetch(`${apiUrl}${endpoint}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify(data),
            });
            handleErrors(response);
            return response.json();
        } catch (error) {
            console.error('PUT request failed:', error);
            throw error;
        }
    },

    delete: async (endpoint) => {
        try {
            const response = await fetch(`${apiUrl}${endpoint}`, {
                method: 'DELETE',
                headers,
            });
            handleErrors(response);
            return response.json();
        } catch (error) {
            console.error('DELETE request failed:', error);
            throw error;
        }
    },
};

export const entpoits1 = {
    "getProducts": "products",
    "getProductById": "products/",
    "addProducts": "products/add",
    "deleteProducts": "products/"

}



export default HttpHelper;


const API_URL = process.env.REACT_APP_API_URL;

export async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: credentials.username, password: credentials.password })
        });

        return await response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch request
        console.error("Error during loginUser:", error);
        throw error;
    }
}

export async function uploadImage(image) {
    try {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "eventmapper");
        data.append("cloud_name", "abhi4267");

        const response = await fetch("https://api.cloudinary.com/v1_1/abhi4267/image/upload", {
            method: 'POST',
            body: data
        });

        const json = await response.json();
        return json.url;
    } catch (error) {
        // Handle any errors that occurred during the fetch request
        console.error("Error during uploadImage:", error);
        throw error;
    }
}

export async function createUser(credentials, imageurl) {
    try {
        const response = await fetch(`${API_URL}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password, photo: imageurl })
        });

        const json = await response.json();
        return json;
    } catch (error) {
        // Handle any errors that occurred during the fetch request
        console.error("Error during createUser:", error);
        throw error;
    }
}

export async function updateUser() {
    try {
        // Implement the logic for updating user here
    } catch (error) {
        // Handle any errors that occurred during the fetch request
        console.error("Error during updateUser:", error);
        throw error;
    }
}
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

async function request(path) {
	const response = await fetch(`${API_URL}${path}`);

	if (!response.ok) {
		throw new Error(`Request failed: ${response.status}`);
	}

	return response.json();
}

export function getApprovedOngs() {
	return request("/api/ongs");
}

export function getOngById(id) {
	return request(`/api/ongs/${id}`);
}

export function getTags() {
	return request("/api/tags");
}

export function getSocialMediaTypes() {
	return request("/api/social-media");
}

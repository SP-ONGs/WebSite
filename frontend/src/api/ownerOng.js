const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

import { getCsrfToken } from "./util/csrf.js";

async function requestOwnerOng(path, options = {}) {
	const response = await fetch(`${API_URL}${path}`, {
		...options,
		credentials: "include",
		headers: {
			...options.headers
		}
	});

	if (!response.ok) {
		const data = await response.json().catch(() => ({}));
		throw new Error(data.message ?? `Request failed: ${response.status}`);
	}

	return response.json();
}

export function getMyOng() {
	return requestOwnerOng("/api/owner/ong");
}

export async function updateMyOng(ongData) {
	const csrfToken = await getCsrfToken();

	return requestOwnerOng("/api/owner/ong", {
		method: "PUT",
		headers: {
			"Content-Type": "application.json",
			"X-CSRF-TOKEN": csrfToken
		},
		body: JSON.stringify(ongData)
	});
}

export async function requestMyOngRemoval() {
	const csrfToken = await getCsrfToken();

	const response = await requestOwnerOng("/removal-request", {
		method: "POST",
		headers: {
			"X-CSRF-TOKEN": csrfToken
		}
	});

	if (!response.ok) {
		const error = await response.json().catch(() => ({}));
		throw new Error(error.message || "Failed to request ONG removal.");
	}

	return response.json();
}

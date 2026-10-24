const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

import { getCsrfToken } from "./util/csrf.js";

export async function login(email, password) {
	const csrfToken = await getCsrfToken();

	const response = await fetch(`${API_URL}/api/auth/login`, {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": csrfToken },
		body: JSON.stringify({ email, password })
	})

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message ?? "Login failed.");
	}

	return data;
}

export async function getCurrentAccount() {
	const response = await fetch(`${API_URL}/api/auth/me`, { credentials: "include" });

	if (!response.ok) {
		if (response.status === 401) {
			return null;
		}

		throw new Error("Could not retrieve the current account.");
	}

	return response.json();
}

export async function logout() {
	const csrfToken = await getCsrfToken();

	const response = await fetch(`${API_URL}/api/auth/logout`, {
		method: "POST",
		credentials: "include",
		headers: { "X-CSRF-TOKEN": csrfToken }
	})

	if (!response.ok) {
		throw new Error("Logout failed.");
	}
}

export async function getCsrfToken() {
	const response = await fetch(`${API_URL}/api/auth/csrf`, { credentials: "include" });

	if (!response.ok) {
		throw new Error("Could not obtain CSRF token.");
	}

	const data = await response.json();
	return data.token;
}

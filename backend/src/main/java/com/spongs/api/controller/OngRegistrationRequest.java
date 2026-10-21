package com.spongs.api.controller;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record OngRegistrationRequest(
		@NotBlank(message = "Email is required.") @Email(message = "Enter a valid email adress.") @Size(max = 254) String email,
		@NotBlank(message = "Password is required.") @Size(min = 8, max = 72, message = "Password must contain between 8 and 72 characters.") String password,
		@NotBlank(message = "ONG name is required.") @Size(max = 150) String name,
		@NotBlank(message = "CEP is required.") @Pattern(regexp = "\\d{8}", message = "CEP must contain 8 digits.") String cep,
		@NotBlank(message = "House number is required.") @Size(max = 30) String houseNumber,
		@Size(max = 18, message = "CNPJ is too long.") String cnpj,
		String imageUrl) {
}

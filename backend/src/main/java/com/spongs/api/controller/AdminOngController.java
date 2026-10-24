package com.spongs.api.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/ongs")
@PreAuthorize("hasRole('ADMIN')")
public class AdminOngController {

}

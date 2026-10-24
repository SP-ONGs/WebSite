package com.spongs.api.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/owner")
@PreAuthorize("hasRole('ONG_OWNER')")
public class OngOwnerController {

}

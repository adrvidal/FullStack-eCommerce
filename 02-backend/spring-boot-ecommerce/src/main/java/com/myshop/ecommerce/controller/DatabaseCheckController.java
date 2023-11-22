package com.myshop.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DatabaseCheckController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/checkDatabaseConnection")
    public String checkDatabaseConnection() {
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            return "Conexión exitosa a la base de datos.";
        } catch (Exception e) {
            return "Error al conectar con la base de datos: " + e.getMessage();
        }
    }
}


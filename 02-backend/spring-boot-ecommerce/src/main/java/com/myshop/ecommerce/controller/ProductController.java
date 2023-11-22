package com.myshop.ecommerce.controller;

import com.myshop.ecommerce.entity.Product;
import com.myshop.ecommerce.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos") // Define la ruta base para este controlador
public class ProductController {

    private final ProductRepository productRepositoryC;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepositoryC = productRepository;
    }

    @GetMapping // Maneja las solicitudes GET en la ruta base ("/api/products")
    public List<Product> getAllProducts() {
        return productRepositoryC.findAll(); // Recupera todos los productos de la base de datos
    }

    // Podrías agregar métodos adicionales aquí para manejar otros endpoints (POST, PUT, DELETE, etc.)
}

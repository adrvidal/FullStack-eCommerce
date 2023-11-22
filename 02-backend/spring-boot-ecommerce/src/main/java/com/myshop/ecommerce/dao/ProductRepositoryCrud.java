package com.myshop.ecommerce.dao;

import com.myshop.ecommerce.entity.Product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepositoryCrud extends CrudRepository<Product, Long> {
    List<Product> findAll();
}

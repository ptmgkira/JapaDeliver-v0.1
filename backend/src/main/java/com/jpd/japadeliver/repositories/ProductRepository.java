package com.jpd.japadeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpd.japadeliver.entities.Product;

public interface  ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findAllByOrderByNameAsc();
}

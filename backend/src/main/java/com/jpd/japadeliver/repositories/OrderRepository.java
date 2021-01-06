package com.jpd.japadeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpd.japadeliver.entities.Order;

public interface  OrderRepository extends JpaRepository<Order, Long>{

}

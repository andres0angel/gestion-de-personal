package com.gestion.personal.repository;

import com.gestion.personal.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepsitory extends JpaRepository<Employee, Long> {
}

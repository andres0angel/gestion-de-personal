package com.gestion.personal.controller;

import com.gestion.personal.exception.ResourceNotFoundException;
import com.gestion.personal.model.Employee;
import com.gestion.personal.repository.EmployeeRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    @Autowired
    private EmployeeRepsitory employeeRepsitory;

    @GetMapping("/clientes")
    public List<Employee> employeeList(){
        return employeeRepsitory.findAll();
    }

    @PostMapping("/clientes")
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeRepsitory.save(employee);
    }

    @GetMapping("/clientes/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepsitory.findById(id).
                orElseThrow( () -> new ResourceNotFoundException("El empleado con el id " + id +
                        "no existe"));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee employee1 = employeeRepsitory.findById(id).orElseThrow( () ->
                new ResourceNotFoundException("El empleado con el id " + id + "no existe")
        );

        employee1.setEmail(employee.getEmail());
        employee1.setPhone(employee.getPhone());
        employee1.setFirstName(employee.getFirstName());
        employee1.setLastName(employee.getLastName());

        Employee updatedEmployee = employeeRepsitory.save(employee1);

        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepsitory.findById(id).orElseThrow( () ->
                new ResourceNotFoundException("El empleado con el id " + id + "no existe")
        );
        employeeRepsitory.delete(employee);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}

package ca.mcgill.ecse428.unitrade.unitradebackend.model;

import jakarta.persistence.*;

@Entity
public class Person{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
}

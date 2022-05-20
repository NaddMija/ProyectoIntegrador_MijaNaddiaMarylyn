
package com.backendNaddia.nmt.Repository;

import com.backendNaddia.nmt.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}

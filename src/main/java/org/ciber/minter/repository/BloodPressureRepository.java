package org.ciber.minter.repository;

import org.ciber.minter.domain.BloodPressure;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the BloodPressure entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BloodPressureRepository extends JpaRepository<BloodPressure, Long> {

    @Query("select blood_pressure from BloodPressure blood_pressure where blood_pressure.bloodPressureUser.login = ?#{principal.username}")
    List<BloodPressure> findByBloodPressureUserIsCurrentUser();

}

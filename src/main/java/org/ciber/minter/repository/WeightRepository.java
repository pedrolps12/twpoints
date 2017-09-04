package org.ciber.minter.repository;

import org.ciber.minter.domain.Weight;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the Weight entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WeightRepository extends JpaRepository<Weight, Long> {

    @Query("select weight from Weight weight where weight.weightUser.login = ?#{principal.username}")
    List<Weight> findByWeightUserIsCurrentUser();

}

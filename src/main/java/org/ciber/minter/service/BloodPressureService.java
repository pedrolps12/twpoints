package org.ciber.minter.service;

import org.ciber.minter.domain.BloodPressure;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing BloodPressure.
 */
public interface BloodPressureService {

    /**
     * Save a bloodPressure.
     *
     * @param bloodPressure the entity to save
     * @return the persisted entity
     */
    BloodPressure save(BloodPressure bloodPressure);

    /**
     *  Get all the bloodPressures.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<BloodPressure> findAll(Pageable pageable);

    /**
     *  Get the "id" bloodPressure.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    BloodPressure findOne(Long id);

    /**
     *  Delete the "id" bloodPressure.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}

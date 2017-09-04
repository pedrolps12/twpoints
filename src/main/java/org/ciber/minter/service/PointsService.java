package org.ciber.minter.service;

import org.ciber.minter.domain.Points;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Points.
 */
public interface PointsService {

    /**
     * Save a points.
     *
     * @param points the entity to save
     * @return the persisted entity
     */
    Points save(Points points);

    /**
     *  Get all the points.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<Points> findAll(Pageable pageable);

    /**
     *  Get the "id" points.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    Points findOne(Long id);

    /**
     *  Delete the "id" points.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}

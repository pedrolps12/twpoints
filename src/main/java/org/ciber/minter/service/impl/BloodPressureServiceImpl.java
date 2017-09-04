package org.ciber.minter.service.impl;

import org.ciber.minter.service.BloodPressureService;
import org.ciber.minter.domain.BloodPressure;
import org.ciber.minter.repository.BloodPressureRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing BloodPressure.
 */
@Service
@Transactional
public class BloodPressureServiceImpl implements BloodPressureService{

    private final Logger log = LoggerFactory.getLogger(BloodPressureServiceImpl.class);

    private final BloodPressureRepository bloodPressureRepository;
    public BloodPressureServiceImpl(BloodPressureRepository bloodPressureRepository) {
        this.bloodPressureRepository = bloodPressureRepository;
    }

    /**
     * Save a bloodPressure.
     *
     * @param bloodPressure the entity to save
     * @return the persisted entity
     */
    @Override
    public BloodPressure save(BloodPressure bloodPressure) {
        log.debug("Request to save BloodPressure : {}", bloodPressure);
        return bloodPressureRepository.save(bloodPressure);
    }

    /**
     *  Get all the bloodPressures.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<BloodPressure> findAll(Pageable pageable) {
        log.debug("Request to get all BloodPressures");
        return bloodPressureRepository.findAll(pageable);
    }

    /**
     *  Get one bloodPressure by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public BloodPressure findOne(Long id) {
        log.debug("Request to get BloodPressure : {}", id);
        return bloodPressureRepository.findOne(id);
    }

    /**
     *  Delete the  bloodPressure by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete BloodPressure : {}", id);
        bloodPressureRepository.delete(id);
    }
}

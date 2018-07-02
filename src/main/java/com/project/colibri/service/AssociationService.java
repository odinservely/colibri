package com.project.colibri.service;

import com.project.colibri.service.dto.AssociationDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Association.
 */
public interface AssociationService {

    /**
     * Save a association.
     *
     * @param associationDTO the entity to save
     * @return the persisted entity
     */
    AssociationDTO save(AssociationDTO associationDTO);

    /**
     * Get all the associations.
     *
     * @return the list of entities
     */
    List<AssociationDTO> findAll();

    /**
     * Get all the Association with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    Page<AssociationDTO> findAllWithEagerRelationships(Pageable pageable);
    
    /**
     * Get the "id" association.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<AssociationDTO> findOne(Long id);

    /**
     * Delete the "id" association.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}

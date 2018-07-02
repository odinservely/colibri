package com.project.colibri.service;

import com.project.colibri.service.dto.ProfileDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Profile.
 */
public interface ProfileService {

    /**
     * Save a profile.
     *
     * @param profileDTO the entity to save
     * @return the persisted entity
     */
    ProfileDTO save(ProfileDTO profileDTO);

    /**
     * Get all the profiles.
     *
     * @return the list of entities
     */
    List<ProfileDTO> findAll();
    /**
     * Get all the ProfileDTO where Association is null.
     *
     * @return the list of entities
     */
    List<ProfileDTO> findAllWhereAssociationIsNull();


    /**
     * Get the "id" profile.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<ProfileDTO> findOne(Long id);

    /**
     * Delete the "id" profile.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    Optional<ProfileDTO> findByUserId(Long userId);
}

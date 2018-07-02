package com.project.colibri.service.impl;

import com.project.colibri.service.AssociationService;
import com.project.colibri.domain.Association;
import com.project.colibri.repository.AssociationRepository;
import com.project.colibri.service.dto.AssociationDTO;
import com.project.colibri.service.mapper.AssociationMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
/**
 * Service Implementation for managing Association.
 */
@Service
@Transactional
public class AssociationServiceImpl implements AssociationService {

    private final Logger log = LoggerFactory.getLogger(AssociationServiceImpl.class);

    private final AssociationRepository associationRepository;

    private final AssociationMapper associationMapper;

    public AssociationServiceImpl(AssociationRepository associationRepository, AssociationMapper associationMapper) {
        this.associationRepository = associationRepository;
        this.associationMapper = associationMapper;
    }

    /**
     * Save a association.
     *
     * @param associationDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public AssociationDTO save(AssociationDTO associationDTO) {
        log.debug("Request to save Association : {}", associationDTO);
        Association association = associationMapper.toEntity(associationDTO);
        association = associationRepository.save(association);
        return associationMapper.toDto(association);
    }

    /**
     * Get all the associations.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<AssociationDTO> findAll() {
        log.debug("Request to get all Associations");
        return associationRepository.findAllWithEagerRelationships().stream()
            .map(associationMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get all the Association with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    public Page<AssociationDTO> findAllWithEagerRelationships(Pageable pageable) {
        return associationRepository.findAllWithEagerRelationships(pageable).map(associationMapper::toDto);
    }
    

    /**
     * Get one association by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<AssociationDTO> findOne(Long id) {
        log.debug("Request to get Association : {}", id);
        return associationRepository.findOneWithEagerRelationships(id)
            .map(associationMapper::toDto);
    }

    /**
     * Delete the association by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Association : {}", id);
        associationRepository.deleteById(id);
    }
}

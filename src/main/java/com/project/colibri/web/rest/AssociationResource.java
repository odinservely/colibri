package com.project.colibri.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.project.colibri.service.AssociationService;
import com.project.colibri.web.rest.errors.BadRequestAlertException;
import com.project.colibri.web.rest.util.HeaderUtil;
import com.project.colibri.service.dto.AssociationDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Association.
 */
@RestController
@RequestMapping("/api")
public class AssociationResource {

    private final Logger log = LoggerFactory.getLogger(AssociationResource.class);

    private static final String ENTITY_NAME = "association";

    private final AssociationService associationService;

    public AssociationResource(AssociationService associationService) {
        this.associationService = associationService;
    }

    /**
     * POST  /associations : Create a new association.
     *
     * @param associationDTO the associationDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new associationDTO, or with status 400 (Bad Request) if the association has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/associations")
    @Timed
    public ResponseEntity<AssociationDTO> createAssociation(@Valid @RequestBody AssociationDTO associationDTO) throws URISyntaxException {
        log.debug("REST request to save Association : {}", associationDTO);
        if (associationDTO.getId() != null) {
            throw new BadRequestAlertException("A new association cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AssociationDTO result = associationService.save(associationDTO);
        return ResponseEntity.created(new URI("/api/associations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /associations : Updates an existing association.
     *
     * @param associationDTO the associationDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated associationDTO,
     * or with status 400 (Bad Request) if the associationDTO is not valid,
     * or with status 500 (Internal Server Error) if the associationDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/associations")
    @Timed
    public ResponseEntity<AssociationDTO> updateAssociation(@Valid @RequestBody AssociationDTO associationDTO) throws URISyntaxException {
        log.debug("REST request to update Association : {}", associationDTO);
        if (associationDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        AssociationDTO result = associationService.save(associationDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, associationDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /associations : get all the associations.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many)
     * @return the ResponseEntity with status 200 (OK) and the list of associations in body
     */
    @GetMapping("/associations")
    @Timed
    public List<AssociationDTO> getAllAssociations(@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get all Associations");
        return associationService.findAll();
    }

    /**
     * GET  /associations/:id : get the "id" association.
     *
     * @param id the id of the associationDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the associationDTO, or with status 404 (Not Found)
     */
    @GetMapping("/associations/{id}")
    @Timed
    public ResponseEntity<AssociationDTO> getAssociation(@PathVariable Long id) {
        log.debug("REST request to get Association : {}", id);
        Optional<AssociationDTO> associationDTO = associationService.findOne(id);
        return ResponseUtil.wrapOrNotFound(associationDTO);
    }

    /**
     * DELETE  /associations/:id : delete the "id" association.
     *
     * @param id the id of the associationDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/associations/{id}")
    @Timed
    public ResponseEntity<Void> deleteAssociation(@PathVariable Long id) {
        log.debug("REST request to delete Association : {}", id);
        associationService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}

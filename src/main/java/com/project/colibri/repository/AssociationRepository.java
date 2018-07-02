package com.project.colibri.repository;

import com.project.colibri.domain.Association;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Association entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AssociationRepository extends JpaRepository<Association, Long> {

    @Query(value = "select distinct association from Association association left join fetch association.events left join fetch association.members",
        countQuery = "select count(distinct association) from Association association")
    Page<Association> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct association from Association association left join fetch association.events left join fetch association.members")
    List<Association> findAllWithEagerRelationships();

    @Query("select association from Association association left join fetch association.events left join fetch association.members where association.id =:id")
    Optional<Association> findOneWithEagerRelationships(@Param("id") Long id);

}

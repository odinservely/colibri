package com.project.colibri.service.mapper;

import com.project.colibri.domain.*;
import com.project.colibri.service.dto.AssociationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Association and its DTO AssociationDTO.
 */
@Mapper(componentModel = "spring", uses = {ProfileMapper.class, EventMapper.class, TypeMapper.class})
public interface AssociationMapper extends EntityMapper<AssociationDTO, Association> {

    @Mapping(source = "president.id", target = "presidentId")
    @Mapping(source = "type.id", target = "typeId")
    AssociationDTO toDto(Association association);

    @Mapping(source = "presidentId", target = "president")
    @Mapping(target = "roles", ignore = true)
    @Mapping(target = "categories", ignore = true)
    @Mapping(source = "typeId", target = "type")
    Association toEntity(AssociationDTO associationDTO);

    default Association fromId(Long id) {
        if (id == null) {
            return null;
        }
        Association association = new Association();
        association.setId(id);
        return association;
    }
}

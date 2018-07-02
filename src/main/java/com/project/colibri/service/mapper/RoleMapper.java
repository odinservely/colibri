package com.project.colibri.service.mapper;

import com.project.colibri.domain.*;
import com.project.colibri.service.dto.RoleDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Role and its DTO RoleDTO.
 */
@Mapper(componentModel = "spring", uses = {AssociationMapper.class})
public interface RoleMapper extends EntityMapper<RoleDTO, Role> {

    @Mapping(source = "association.id", target = "associationId")
    RoleDTO toDto(Role role);

    @Mapping(target = "profiles", ignore = true)
    @Mapping(source = "associationId", target = "association")
    Role toEntity(RoleDTO roleDTO);

    default Role fromId(Long id) {
        if (id == null) {
            return null;
        }
        Role role = new Role();
        role.setId(id);
        return role;
    }
}

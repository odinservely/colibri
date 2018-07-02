package com.project.colibri.service.mapper;

import com.project.colibri.domain.*;
import com.project.colibri.service.dto.TypeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Type and its DTO TypeDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TypeMapper extends EntityMapper<TypeDTO, Type> {


    @Mapping(target = "associations", ignore = true)
    Type toEntity(TypeDTO typeDTO);

    default Type fromId(Long id) {
        if (id == null) {
            return null;
        }
        Type type = new Type();
        type.setId(id);
        return type;
    }
}

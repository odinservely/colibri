package com.project.colibri.service.mapper;

import com.project.colibri.domain.*;
import com.project.colibri.service.dto.CategoryDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Category and its DTO CategoryDTO.
 */
@Mapper(componentModel = "spring", uses = {AssociationMapper.class})
public interface CategoryMapper extends EntityMapper<CategoryDTO, Category> {

    @Mapping(source = "association.id", target = "associationId")
    CategoryDTO toDto(Category category);

    @Mapping(target = "profiles", ignore = true)
    @Mapping(source = "associationId", target = "association")
    Category toEntity(CategoryDTO categoryDTO);

    default Category fromId(Long id) {
        if (id == null) {
            return null;
        }
        Category category = new Category();
        category.setId(id);
        return category;
    }
}

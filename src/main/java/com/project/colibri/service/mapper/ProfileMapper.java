package com.project.colibri.service.mapper;

import com.project.colibri.domain.*;
import com.project.colibri.service.dto.ProfileDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Profile and its DTO ProfileDTO.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class, RoleMapper.class, CategoryMapper.class})
public interface ProfileMapper extends EntityMapper<ProfileDTO, Profile> {

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "role.id", target = "roleId")
    @Mapping(source = "category.id", target = "categoryId")
    ProfileDTO toDto(Profile profile);

    @Mapping(source = "userId", target = "user")
    @Mapping(target = "association", ignore = true)
    @Mapping(source = "roleId", target = "role")
    @Mapping(source = "categoryId", target = "category")
    @Mapping(target = "events", ignore = true)
    @Mapping(target = "associations", ignore = true)
    Profile toEntity(ProfileDTO profileDTO);

    default Profile fromId(Long id) {
        if (id == null) {
            return null;
        }
        Profile profile = new Profile();
        profile.setId(id);
        return profile;
    }
}

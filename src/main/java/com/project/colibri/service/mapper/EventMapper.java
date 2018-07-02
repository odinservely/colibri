package com.project.colibri.service.mapper;

import com.project.colibri.domain.*;
import com.project.colibri.service.dto.EventDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Event and its DTO EventDTO.
 */
@Mapper(componentModel = "spring", uses = {ProfileMapper.class})
public interface EventMapper extends EntityMapper<EventDTO, Event> {


    @Mapping(target = "associations", ignore = true)
    Event toEntity(EventDTO eventDTO);

    default Event fromId(Long id) {
        if (id == null) {
            return null;
        }
        Event event = new Event();
        event.setId(id);
        return event;
    }
}

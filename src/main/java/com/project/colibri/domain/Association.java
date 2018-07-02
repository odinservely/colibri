package com.project.colibri.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Association.
 */
@Entity
@Table(name = "association")
public class Association implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "picture")
    private String picture;

    @NotNull
    @Column(name = "address", nullable = false)
    private String address;

    @NotNull
    @Column(name = "postcode", nullable = false)
    private String postcode;

    @NotNull
    @Column(name = "city", nullable = false)
    private String city;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private Profile president;

    @OneToMany(mappedBy = "association")
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "association")
    private Set<Category> categories = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "association_event",
               joinColumns = @JoinColumn(name = "associations_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "events_id", referencedColumnName = "id"))
    private Set<Event> events = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "association_member",
               joinColumns = @JoinColumn(name = "associations_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "members_id", referencedColumnName = "id"))
    private Set<Profile> members = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("associations")
    private Type type;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Association name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public Association description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPicture() {
        return picture;
    }

    public Association picture(String picture) {
        this.picture = picture;
        return this;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getAddress() {
        return address;
    }

    public Association address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostcode() {
        return postcode;
    }

    public Association postcode(String postcode) {
        this.postcode = postcode;
        return this;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getCity() {
        return city;
    }

    public Association city(String city) {
        this.city = city;
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Profile getPresident() {
        return president;
    }

    public Association president(Profile profile) {
        this.president = profile;
        return this;
    }

    public void setPresident(Profile profile) {
        this.president = profile;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public Association roles(Set<Role> roles) {
        this.roles = roles;
        return this;
    }

    public Association addRole(Role role) {
        this.roles.add(role);
        role.setAssociation(this);
        return this;
    }

    public Association removeRole(Role role) {
        this.roles.remove(role);
        role.setAssociation(null);
        return this;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public Association categories(Set<Category> categories) {
        this.categories = categories;
        return this;
    }

    public Association addCategory(Category category) {
        this.categories.add(category);
        category.setAssociation(this);
        return this;
    }

    public Association removeCategory(Category category) {
        this.categories.remove(category);
        category.setAssociation(null);
        return this;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public Association events(Set<Event> events) {
        this.events = events;
        return this;
    }

    public Association addEvent(Event event) {
        this.events.add(event);
        event.getAssociations().add(this);
        return this;
    }

    public Association removeEvent(Event event) {
        this.events.remove(event);
        event.getAssociations().remove(this);
        return this;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    public Set<Profile> getMembers() {
        return members;
    }

    public Association members(Set<Profile> profiles) {
        this.members = profiles;
        return this;
    }

    public Association addMember(Profile profile) {
        this.members.add(profile);
        profile.getAssociations().add(this);
        return this;
    }

    public Association removeMember(Profile profile) {
        this.members.remove(profile);
        profile.getAssociations().remove(this);
        return this;
    }

    public void setMembers(Set<Profile> profiles) {
        this.members = profiles;
    }

    public Type getType() {
        return type;
    }

    public Association type(Type type) {
        this.type = type;
        return this;
    }

    public void setType(Type type) {
        this.type = type;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Association association = (Association) o;
        if (association.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), association.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Association{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", picture='" + getPicture() + "'" +
            ", address='" + getAddress() + "'" +
            ", postcode='" + getPostcode() + "'" +
            ", city='" + getCity() + "'" +
            "}";
    }
}

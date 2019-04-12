package net.atos.abf.genidissuerendpoint.services;

interface Validator<T> {
    boolean validate(T data);
}

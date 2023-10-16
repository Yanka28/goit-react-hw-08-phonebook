import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.list.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

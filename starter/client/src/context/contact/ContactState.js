import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jenifer Lopez",
        email: "jenifer@gmail.com",
        phone: 111 - 111 - 111
      },
      {
        id: 2,
        name: "Ricky Martin",
        email: "ricky@gmail.com",
        phone: 222 - 222 - 222
      },
      {
        id: 3,
        name: "Enricke Iglesias",
        email: "iglesias@gmail.com",
        phone: 333 - 333 - 333
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set current contact

  // Claer current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

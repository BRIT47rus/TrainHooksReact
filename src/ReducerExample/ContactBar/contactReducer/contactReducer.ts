import { ContactType, initial_state, StateContacts } from "../ContactProvider/ContactProvider";

export const actions = {
    SELECT_CONTACTS: 'select',
    REMOVE_CONTACT: 'remove',
    REFLESH_CONTACTS: 'reflesh',
    ADD_CONTACT: 'add'

} as const;

export type TypeActions =
    | { type: typeof actions.SELECT_CONTACTS; payload: { id: string } }
    | { type: typeof actions.ADD_CONTACT; payload: ContactType }
    | { type: typeof actions.REFLESH_CONTACTS }
    | { type: typeof actions.REMOVE_CONTACT; payload: { id: string } };





export const reducerContacts = (state: StateContacts, action: TypeActions): StateContacts => {
    switch (action.type) {
        case actions.SELECT_CONTACTS:
            return {
                ...state,
                selectedId: action.payload.id
            };
        case actions.REFLESH_CONTACTS: {
            return initial_state
        };
        case actions.REMOVE_CONTACT: {
            const selectedIdToRemove = action.payload.id;
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== selectedIdToRemove),
                selectedId: selectedIdToRemove === state.selectedId ? null : state.selectedId
            }
        };
        case actions.ADD_CONTACT: {
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        };
        default:
            console.log('не ваш редусер');
            return state


    }
}



export const Types = {
    INCREMENT: 'increment',
    INCREMENT_DOUBLE: 'double_increment',
    CLEAR: 'clear'
} as const;

// type TypeKey = keyof typeof Types;
// type TypeValues = typeof Types[TypeKey];

type StateType = {
    name: string;
    count: number;
}
type ActionType =
    | { type: typeof Types.INCREMENT }
    | { type: typeof Types.INCREMENT_DOUBLE }
    | { type: typeof Types.CLEAR };

const initial_state: StateType = {
    name: '',
    count: 0
}

export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case Types.INCREMENT:
            return {
                ...state,
                name: Types.INCREMENT,
                count: state.count + 1
            }
        case Types.INCREMENT_DOUBLE:
            return {
                ...state,
                name: Types.INCREMENT_DOUBLE,
                count: state.count + 2
            }
        case Types.CLEAR:
            return initial_state
                
            
        default:
            console.log('нет такого редусера');
            return state
    }

}
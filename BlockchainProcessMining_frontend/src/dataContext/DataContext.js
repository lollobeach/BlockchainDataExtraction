import React, {useMemo, useReducer} from 'react';

import JsonLog from "../mock/jsonLog.json"

const initialState = {
    results: null,
    ocel: {
        eventTypes: [],
        objectTypes: [],
        events: [],
        objects: []
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return {
                ...state,
                results: action.payload
            }
        case 'SET_OCEL':
            return {
                ...state,
                ocel: action.payload
            }
        default:
            return state
    }
}

export const DataContext = React.createContext(initialState);

function DataProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const setResults = (results) => {
        dispatch({type: 'SET_RESULTS', payload: results})
    }

    const setOcel = (ocel) => {
        dispatch({type: 'SET_OCEL', payload: ocel})
    }

    const memorizedValue = useMemo(() => ({
        setResults,
        setOcel,
        results: state.results,
        ocel: state.ocel
    }), [state.results, state.ocel, setResults, setOcel]);

    return (
        <DataContext.Provider value={memorizedValue}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
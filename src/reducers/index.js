const initialState = {
    inputValue: 1,
    chartValue: false,
    data: [],
    dataById: {
        1: {
            id: 1,
            income: "",
            invSum: "",
            credit: "",
        }
    }
};

export default function main(state = initialState, action) {
    switch (action.type) {

         case "ADD_WINDOW":
            {
                const newId = state.inputValue + 1;
                return { ...state,
                    inputValue: ++state.inputValue,
                    dataById: {
                    ...state.dataById,
                        [newId]: {
                            id: newId,
                            income: "",
                            invSum: "",
                            credit: "",
                        }
                    }
                }
            }

        case "DELETE_WINDOW": {
            let newData = state.dataById;
            delete newData[action.id];
            return { ...state, dataById: newData }
        }

        case "ADD_INFO": {
            let prop = action,
                id = prop.id;

            return { ...state,
                dataById: {
                    ...state.dataById,
                    [id]: {
                        id: id,
                        income: prop.income,
                        invSum: prop.invSum,
                        credit: prop.credit
                    }
                }
            }
        }

        default:
            return state
    }
}
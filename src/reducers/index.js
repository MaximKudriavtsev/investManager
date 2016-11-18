const initialState = {
    any1 : 1,
    any2 : 2
};

export default function main(state = initialState, action) {
    switch (action.type) {

        case "Any":
            return { ...state, any2 : 23 }

        default:
            return state
    }
}
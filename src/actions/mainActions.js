export function deleteWindow(id) {
    return {
        type: "DELETE_WINDOW",
        id: id
    };
}

export function addInfo(id, income, invSum, credit) {
    return {
        type: "ADD_INFO",
        id: id,
        income: income,
        invSum: invSum,
        credit: credit
    };
}

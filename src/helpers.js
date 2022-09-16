export const checkBudget = (actualbudget, remaining) => {
    let alertClass;

    if (actualbudget / 4 > remaining) {
        alertClass = 'alert alert-danger';
    }
    else if (actualbudget / 2 > remaining) {
        alertClass = 'alert alert-warning';
    }
    else {
        alertClass = 'alert alert-success';
    }

    return alertClass;
}
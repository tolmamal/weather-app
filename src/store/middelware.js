const middleware = store => next => action => {
    console.log({action});
    return next(action);
};

export default middleware;

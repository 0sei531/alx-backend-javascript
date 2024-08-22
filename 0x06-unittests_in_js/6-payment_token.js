function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    }
    return Promise.resolve(null); // or Promise.reject(new Error('Failure case'))
}

module.exports = getPaymentTokenFromAPI;

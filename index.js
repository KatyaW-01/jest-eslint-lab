
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
    if(typeof input === 'number' ){
        return '';
    }
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    if(action === undefined || username === undefined){
        throw Error ('Action and username are required');
    } else if (action === '' || username === ''){
        throw Error ('Action and username are required');
    }
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };

'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;

    switch (type) {
      case 'addProperties':
        const extraData = action.extraData;

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        const keysToRemove = action.keysToRemove;

        for (const key of keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;

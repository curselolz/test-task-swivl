import { createAction } from 'redux-act';
import identity from 'lodash/identity';

/**
 * Creates action helper
 * @param  {string} moduleName A name of the module
 * @return {function} A function that receives action name as a string and returns actions
 */
export const createAsyncAction = (type, payloadCreators, metaCreators) => {
  const payload = payloadCreators || {};
  const meta = metaCreators || {};
  return {
    request: createAction(`${type}::REQUEST`, payload.request || identity, meta.request),
    progress: createAction(`${type}::PROGRESS`, payload.progress || identity, meta.progress),
    success: createAction(`${type}::SUCCESS`, payload.success || identity, meta.success),
    failure: createAction(`${type}::FAILURE`, payload.failure || identity, meta.failure),
    cancel: createAction(`${type}::CANCEL`, payload.cancel || identity, meta.cancel),
  };
};

export default prefix => {
  return (type, payloadCreators, metaCreators) => {
    return createAsyncAction(`${prefix}:${type}`, payloadCreators, metaCreators);
  };
};

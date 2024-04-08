import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'PROJETO-WEB',
      storage,
      whitelist: ['auth', 'orders'],
    },
    reducers,
  );

  return persistedReducers;
};

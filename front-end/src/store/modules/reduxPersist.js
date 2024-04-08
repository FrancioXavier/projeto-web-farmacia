import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'PROJETO-WEB',
      storage,
      whitelist: ['auth', 'ShoppingCart'],
    },
    reducers,
  );

  return persistedReducers;
};

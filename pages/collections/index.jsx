import React from 'react';
import Head from 'next/head';
import { useAppContext } from '../../contexts/AppContext';

const Collections = () => {
  const { state, dispatch } = useAppContext();
  console.log('🚀 ~ file: index.jsx ~ line 7 ~ Collections ~ state', state);
  return (
    <div>
      <Head>
        <title>PokemonApp || Collection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>this is collection page</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
};

export default Collections;
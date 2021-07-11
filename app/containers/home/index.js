/**
 *
 * Home
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// import Home from './home';
import Home from '../../components/pages/home/loadable';
import { useAuthContext } from '../../context/authContext';

function HomeContainer() {
  const { user } = useAuthContext();
  const history = useHistory();
  const dailyQuote =
    '"lorem ipsum dolor sit amet consectetur adipisicing elitNemo lorem ipsum dolor sit amet consectetur adipisicing elit Nemo"';
  useEffect(() => {
    if (!user || !user.isAuthenticated) {
      history.push('/');
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Home dailyQuote={dailyQuote} />
    </>
  );
}

export default memo(HomeContainer);

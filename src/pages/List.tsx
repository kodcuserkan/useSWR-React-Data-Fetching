import React, { Suspense } from 'react';
import RepositoryList from '../components/RepositoryList';

const List: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RepositoryList />
      <RepositoryList />
      <RepositoryList />
      <RepositoryList />
      <RepositoryList />
    </Suspense>
  );
};

export default List;

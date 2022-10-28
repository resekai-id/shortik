import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ShortLinkForm = dynamic(
  () => import('../components/shortlink-form.component'),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <Suspense>
        <ShortLinkForm />
      </Suspense>
    </div>
  );
};

export default Home;

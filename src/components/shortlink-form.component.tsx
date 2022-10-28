import React, { useState } from 'react';
import { nanoid } from 'nanoid';

type Form = {
  slug: string;
  url: string;
};

const ShortLinkForm: React.FC = () => {
  const [values, setValues] = useState<Form>({ slug: '', url: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    console.log(values);
  };

  const handleCreateRandomSlug = () => {
    setValues((v) => ({ ...v, slug: nanoid(20) }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold p-4 text-white">
        Generate you unique short link!
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 items-center">
        <input
          type="url"
          placeholder="www.example.com"
          value={values.url}
          onChange={(e) => setValues((v) => ({ ...v, url: e.target.value }))}
          className="mb-8 block w-full p-2 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
        <div className="flex">
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 p-2">
              https://www.shortik-vercel.com/
            </span>
            <input
              type="text"
              placeholder="slug"
              value={values.slug}
              onChange={(e) =>
                setValues((v) => ({ ...v, slug: e.target.value }))
              }
              className="block w-full p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              pattern={'^[-_a-zA-Z0-9]+$'}
              title="Only alphanumeric characters and hypens are allowed. No spaces."
              required
            />
          </div>
          <button
            type="button"
            onClick={handleCreateRandomSlug}
            className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-100 py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Random
          </button>
        </div>
        <button
          type="submit"
          className="mt-8 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default ShortLinkForm;

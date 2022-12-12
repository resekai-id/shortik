import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { trpc } from 'utils/trpc';
import debounce from 'lodash/debounce';
import copy from 'copy-to-clipboard';

type Form = {
  slug: string;
  url: string;
};

const ShortLinkForm: React.FC = () => {
  const [values, setValues] = useState<Form>({ slug: '', url: 'https://www.' });
  const [copied, setCopied] = useState(false);
  const url = window.location.origin;

  const slugCheck = trpc.checkSlug.useQuery(
    { slug: values.slug },
    {
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const createSlug = trpc.createSlug.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    createSlug.mutate({ ...values });
  };

  const handleCreateRandomSlug = () => {
    setValues((v) => ({ ...v, slug: nanoid(10) }));
    slugCheck.refetch();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold p-4 text-white text-center">
        Generate you unique short link!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 items-center w-full"
      >
        <input
          type="url"
          autoFocus
          placeholder="https://www.example.com"
          value={values.url}
          onChange={(e) => setValues((v) => ({ ...v, url: e.target.value }))}
          className="mb-8 block w-full p-2 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
          title="https://www.example.com"
        />
        {createSlug.status === 'success' ? (
          <div className="flex w-full">
            <input
              type="text"
              readOnly
              value={`${url}/${values.slug}`}
              className="block w-full p-2 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {copied ? (
              <div
                className="bg-green-100 ml-4 rounded-lg py-2 px-4 text-base text-green-700"
                role="alert"
              >
                Copied!
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  copy(`${url}/${values.slug}`);
                  setCopied(true);
                }}
                className="ml-4 flex justify-center items-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Copy
              </button>
            )}
          </div>
        ) : (
          <div className="flex">
            <div className="flex rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 p-2">
                www.shortik.vercel.app/
              </span>
              <input
                type="text"
                placeholder="slug"
                value={values.slug}
                onChange={(e) => {
                  setValues((v) => ({ ...v, slug: e.target.value }));
                  debounce(slugCheck.refetch, 100);
                }}
                className="block w-full p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                pattern={'^[-_a-zA-Z0-9]+$'}
                title="Only alphanumeric characters, hypens and underscrores are allowed. No spaces."
                required
              />
            </div>
            <button
              type="button"
              onClick={handleCreateRandomSlug}
              className="ml-4 flex justify-center items-center rounded-md border border-transparent bg-indigo-100 py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Random
            </button>
          </div>
        )}
        {slugCheck.data?.used && (
          <span className="mt-1 text-center text-red-500 font-thin text-sm">
            Slug already in use.
          </span>
        )}
        {createSlug.status === 'success' ? (
          <button
            type="button"
            onClick={() => {
              createSlug.reset();
              setCopied(false);
              setValues({ slug: '', url: '' });
            }}
            className="mt-8 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
          >
            Reset
          </button>
        ) : (
          <button
            type="submit"
            disabled={
              (slugCheck?.isFetched && slugCheck?.data?.used) ||
              createSlug.status !== 'idle'
            }
            className="mt-8 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
          >
            {createSlug.status === 'loading' && (
              <svg
                role="status"
                className="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            Generate
          </button>
        )}
      </form>
    </div>
  );
};

export default ShortLinkForm;

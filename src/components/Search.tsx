import { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      return setIsValid(false);
    }

    setIsValid(true);
  };

  return (
    <search>
      <form onSubmit={handleSubmit} className="relative">
        <label className="relative inline-flex items-center">
          <span className="sr-only">Search by location</span>

          <button type="submit" className="absolute left-0 p-2" aria-label="Search">
            <img src="/icons/search.svg" alt="" />
          </button>

          <input
            value={query}
            placeholder="Search city..."
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            className="min-w-80 rounded bg-secondary py-2 pl-10 pr-4 text-foreground placeholder:text-secondary-foreground"
          />
        </label>

        {!isValid && <span className="absolute mt-1 block text-right text-xs">Location is required!</span>}
      </form>
    </search>
  );
};

export default Search;

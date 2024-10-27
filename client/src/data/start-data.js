export const fetchStartData = async (dataToFetch, setFns, URL, setLoading, setError) => {
  setLoading(true);
  setError(null);

  try {
    const [setSorts, setMultiselects, setRanges] = setFns;

    const responses = await Promise.all(
      dataToFetch.map((data) => fetch(`${URL}${data}`))
    );

    if (!responses.every(response => response.ok)) {
        throw new Error(`Error to fetch.`);
    }
    const results = await Promise.all(
      responses.map((response) => response.json())
    );

    results.forEach((result, i) => {
      setFns[i](result);
    });

    setSorts((currentSorts) =>
      currentSorts.map((sort) => ({
        ...sort,
        active: sort.id === "popularFirst",
      }))
    );
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

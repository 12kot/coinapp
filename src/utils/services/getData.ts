const getData = async <T>(url: string): Promise<T | string> => {
  const res = await fetch(url);
  if (res.ok) return (await res.json()) as T;

  return res.statusText;
};

export default getData;

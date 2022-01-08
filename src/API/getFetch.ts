const getFetch = async <T>(url: string) => {
  console.log("url in getFetch", url);

  const response = await fetch(url);

  if (response.status === 204) {
    console.log("response.status - 204 - No content");
    return;
  }

  if (!response.ok) {
    throw new Error(
      `Error. Response status  fetch is: ${response.status}`
    );
  }

  return (await response.json()) as unknown as T;
};

export default getFetch;

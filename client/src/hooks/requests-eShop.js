const API_URL = 'v1';

// Load catalog and return as JSON.
async function httpGetAllProducts() {
  const response = await fetch(`${API_URL}/catalog`);
  return await response.json();
}

export {
  httpGetAllProducts,
};
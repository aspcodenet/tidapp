const url = 'http://localhost:4000/companies';

export const fetchCustomers = async () => {
  const response = await fetch(url)
  const json = await response.json()

  return  json
}
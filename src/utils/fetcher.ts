const fetcher = (apiURL: string) => fetch(apiURL).then(res => res.json())
export default fetcher

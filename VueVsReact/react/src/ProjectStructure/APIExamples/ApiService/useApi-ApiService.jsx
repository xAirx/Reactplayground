/* If you want to create useApiService as a more reusable hook consider making it a generic, which will take a type argument T and return type will be { response: T | null; error: Error | null }. For example,
 */

https://stackoverflow.com/questions/62170766/typescript-and-custom-react-hook-api-service

function useApiService<T>(url: string): { response: T | null; error: Error | null } {
  const baseUrl = 'http://localhost:8009';
  const [response, setResponse] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await axios(`${baseUrl}${url}`);
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error };
}

/* When you use the custom hook useApiService, now you just need to pass what response type you want as a type argument.
 */



interface NavigationData {
  title: string
  ID: string
  post_excerpt: string
}

interface SiteData {
  name: string
}

const menuQuery = useApiService<NavigationData[]>('/wp-json/wp-utils/menus')
// Keep in mind that the return type of menuQuery is
// { response: NavigationData[] | null; error: Error | null}

// you can destructure the response and error from the returned value
// const { response, error } = useApiService<NavigationData[]>('/wp-json/wp-utils/menus');


// same applies to siteNameQuery you can either destructure the response and error
// or use siteNameQuery.response and siteNameQuery.error
const siteNameQuery = useApiService<SiteData>('/wp-json')

P.S.- You need to create the interfaces for the response types which matches the response from your API, otherwise you will loose type information.
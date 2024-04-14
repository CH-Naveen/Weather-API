export async function getCities(): Promise<any[]> {
    try {
      const response = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100');
      if (!response.ok) {
        throw new Error('Failed to fetch cities');
      }
      const data = await response.json();
      console.log('Response data:', data); // Log the response data
      if (!data || !data.results || !Array.isArray(data.results)) {
        throw new Error('Unexpected data format');
      }
      return data.results.map((result: any) => ({
        id: result.geoname_id,
        name: result.name,
        country: result.cou_name_en,
        timezone: result.timezone,
        // Add more fields as needed
      }));
    } catch (error) {
      console.error('Error fetching cities:', error);
      return []; // Return an empty array as a default value
    }
  }
  
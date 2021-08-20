export const getDataFromCloudService = (searchTerm: string): Promise<any> => {
  return new Promise(resolve => {
    console.info(`Searching for ${searchTerm}...`);
    setTimeout(() => {
      resolve({
        title: "Data from cloud",
        subtitle: `You searched: ${searchTerm}`,
        text: "Some description from the cloud.",
      });
    }, 2000);
  });
};

export const downloadData = async (searchTerm: string): Promise<{ data: any }> => {
  const data = await getDataFromCloudService(searchTerm);
  if (!data) {
    // for this example this will never happen
    throw new Error();
  }
  return {
    data,
  };
};

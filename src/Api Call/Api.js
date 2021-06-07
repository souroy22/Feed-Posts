const baseURL = "http://www.mocky.io/v2";
// ? "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e";
//  "http://www.mocky.io/v2/59ac28a9100000ce0bf9c236";
//  "http://www.mocky.io/v2/59ac293b100000d60bf9c239";

export const allPosts = async () => {
  try {
    const response1 = await fetch(`${baseURL}/59b3f0b0100000e30b236b7e`);
    const response2 = await fetch(`${baseURL}/59ac28a9100000ce0bf9c236`);
    const response3 = await fetch(`${baseURL}/59ac293b100000d60bf9c239`);
    const page1 = await response1.json();
    const page2 = await response2.json();
    const page3 = await response3.json();
    const allData = [...page1.posts, ...page2.posts, ...page3.posts];
    return allData;
  } catch (error) {
    console.error(error);
  }
};

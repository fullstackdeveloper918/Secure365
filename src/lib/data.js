"use server"

export const fetchData = async (url) => {
    try {
      const response = await fetch(url, { cache: "no-store" });
      
      const data = await response.json();

     return data
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };



  export const bannerUrl = async (url) => {
    try {
      const response = await fetch(url, { cache: "no-store" });
     
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }; 
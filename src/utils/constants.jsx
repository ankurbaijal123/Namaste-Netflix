export const logo =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const profile =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg";



export const Image_CDN = "https://image.tmdb.org/t/p/w500";

export const Supported_Language = [
    {
      identifier: "en",
      name: "English",
    },
    {
      identifier: "hindi",
      name: "Hindi",
    },
    {
      identifier: "spanish",
      name: "Spanish",
    },
    {
      identifier: "bengali",
      name: "Bengali",
    },
    {
      identifier: "tamil",
      name: "Tamil",
    },
    {
      identifier: "telugu",
      name: "Telugu",
    },
    {
      identifier: "marathi",
      name: "Marathi",
    },
    {
      identifier: "gujarati",
      name: "Gujarati",
    },
    {
      identifier: "malayalam",
      name: "Malayalam",
    },
    {
      identifier: "kannada",
      name: "Kannada",
    },
    {
      identifier: "punjabi",
      name: "Punjabi",
    },
    {
      identifier: "odia",
      name: "Odia",
    },
    {
      identifier: "urdu",
      name: "Urdu",
    }
  ];
  

  export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`,
    }
  };
  
  export const OpenAI_Key = import.meta.env.VITE_OpenAI_Key || "";
  export const GeminiAPI = import.meta.env.VITE_GeminiAPI || "";
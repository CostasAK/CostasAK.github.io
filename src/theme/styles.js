export const styles = {
  global: {
    body: {
      imageResolution: "48dpi",
      imageRendering: "pixelated",
      hyphens: "auto",
    },
    "*": {
      fontWeight: "400 !important",
    },
    "img[src$='.gif'], img[src$='.jpeg'], img[src$='.jpg'], img[src$='.png']": {
      imageRendering: "pixelated",
      imageResolution: "48dpi",
    },
  },
};

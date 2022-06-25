export const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      imageResolution: "48dpi",
      imageRendering: "pixelated",
      hyphens: "auto",
    },
    "*": {
      fontWeight: "400 !important",
      maxWidth: "100%",
    },
    "img[src$='.gif'], img[src$='.jpeg'], img[src$='.jpg'], img[src$='.png']": {
      imageRendering: "pixelated",
      imageResolution: "48dpi",
    },
  },
};

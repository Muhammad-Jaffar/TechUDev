const getImagePrefix = () => {
  // For Vercel deployment, we don't need a prefix as it serves from the root
  return process.env.NODE_ENV === "production" ? "" : "";
};

export { getImagePrefix };
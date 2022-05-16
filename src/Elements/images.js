function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

export const images = importAll(
  require.context("../images/mini", false, /\.(png|jpe?g|svg)$/)
);

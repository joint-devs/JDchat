// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sm = (...props: Record<string, any>[]) => {
  let mergedStyles = {};
  props
    .filter((message) => Object.values(message).length)
    .forEach((stylesItem) => {
      mergedStyles = { ...mergedStyles, ...stylesItem };
    });

  return mergedStyles;
};

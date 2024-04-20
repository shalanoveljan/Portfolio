const INITIAL_ID = 1;

export const generateNextId = (data) => {
  if (data.length == 0) return INITIAL_ID;

  const allIds = data.map((x) => x.id);
  const currentId = Math.max(...allIds);
  return currentId + 1;
};

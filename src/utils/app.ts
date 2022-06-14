export const getIndexFromPathName = (pathName: string) => {
  switch (pathName) {
    case '/':
      return 0;
    case '/works':
      return 1;
    default:
      throw new Error('undefined path name');
  }
};

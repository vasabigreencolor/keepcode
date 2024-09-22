type SortType = 'asc' | 'desc';

export const sortArrayByFieldName = <T>(
  array: T[],
  fieldName: keyof T,
  sortType: SortType = 'asc',
) => {
  return array.sort((a: any, b: any) => {
    let nameA = a[fieldName];
    let nameB = b[fieldName];

    if (typeof a[fieldName] === 'string') nameA = a[fieldName].toUpperCase();
    if (typeof b[fieldName] === 'string') nameB = b[fieldName].toUpperCase();

    if (sortType === 'desc') {
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    }

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
};

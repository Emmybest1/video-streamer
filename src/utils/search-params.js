export const getUrlSearchParam = (searchProps, paramToGet) => {
    const searchParams = new URLSearchParams(searchProps);
    const derivedSearchParameterValue = searchParams.get(paramToGet);

    return derivedSearchParameterValue;
};

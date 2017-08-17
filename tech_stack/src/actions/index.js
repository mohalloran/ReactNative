export const selectLibrary = (libraryId) => {
    console.log('Action library id is ', libraryId);
    return {
        type: 'select_library',
        payload: libraryId
    };
};

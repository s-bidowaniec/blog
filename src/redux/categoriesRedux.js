//selectors
export const getAllCategories = ({ categories }) => categories;

// reucer
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;

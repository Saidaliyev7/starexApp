import * as React from 'react';

import { ApplicationCategoriesContext } from './ApplicationCategoriesProvider';

export const useApplicationCategories = () => React.useContext(ApplicationCategoriesContext);

angular.module('master-data')
    .factory('categoryService', function ($q) {
        return {
            get: function () {
                return $q.when(createCategories());
            }
        };

        function createCategories() {
            var categories = [];

            for (var i = 1; i < 4; i++) {
                categories.push(createCategory(i));
            }

            return categories;

            function createCategory(index) {
                return {
                    id: index,
                    label: 'Category ' + index,
                    subcategories: createSubcategories(index)
                };
            }
        }

        function createSubcategories(categoryIndex) {
            var subcategories = [];

            for (var i = 1; i < 4; i++) {
                subcategories.push(createSubcategory(categoryIndex, i));
            }

            return subcategories;

            function createSubcategory(categoryIndex, index) {
                return {
                    id: index,
                    label: 'Subcategory ' + categoryIndex + '.' + index
                };
            }
        }
    });

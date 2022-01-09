
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/ashley/Developer/meal-planning-app/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ashley/Developer/meal-planning-app/src/pages/index.js")),
  "component---src-pages-meal-plan-js": preferDefault(require("/Users/ashley/Developer/meal-planning-app/src/pages/meal-plan.js")),
  "component---src-pages-recipe-js": preferDefault(require("/Users/ashley/Developer/meal-planning-app/src/pages/recipe.js")),
  "component---src-pages-saved-js": preferDefault(require("/Users/ashley/Developer/meal-planning-app/src/pages/saved.js"))
}


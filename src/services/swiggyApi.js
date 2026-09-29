export const PROXY_SERVER_URL = "https://cors-anywhere.herokuapp.com/";

export const SWIGGY_RESTAURANTS_API = 
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6426028&lng=77.21921669999999&is-seo-homepage-enabled=true";

export const getRestaurantMenuUrl = (restaurantId) => 
    `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=${restaurantId}`;

export const SWIGGY_IMAGE_BASE_URL = 
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

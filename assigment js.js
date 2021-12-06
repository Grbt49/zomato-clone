class restaurantManager {
    restaurantList = [
        {
            name: "KFC",
            address: 'saroj, Bagh',
            city: "Delhi"
        },
        {
            name: "Dominos",
            address: 'tilti chowk',
            city: "Delhi"
        },
        {
            name: "domino",
            address: 'mahipara',
            city: "Pune"
        }
    ];

    printRestaurants = () => {
        return this.restaurantList.map(item => item.name);
    }

    getRestaurantsByCity = (inputCity) => {
        return this.restaurantList.filter(item => item.city.toLowerCase() == inputCity.toLowerCase());
    }
}

var restaurantObj = new restaurantManager();
restaurantObj.printRestaurants();
restaurantObj.getRestaurantsByCity('delhi');

var ordersData = {
    'Below 500': 50,
    '500-1000': 48,
    '1000-1500': 56,
    '1500-2000': 34,
    '2000-2500': 24,
    'Above 2500': 49,
};



var total = Object.values(ordersData).reduce((a, b) => a + b, 0);  



Object.keys(ordersData).length;   


Object.keys(ordersData).map((item, index) => {
    return {
        id: index + 1,
        order: item,
        'order percentage': ((ordersData[item] / total) * 100).toFixed(2),
        restaurant: "Punjabi Tadka"
    }
})

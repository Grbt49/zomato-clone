const express = require('express');

const route = express.Router();

const locationController = require('../Controllers/Locations');
const mealtypesController = require('../Controllers/MealTypes');
const restaurantController = require('../Controllers/Restaurants');
const userController = require('../Controllers/Users');
const menuItemsController = require('../Controllers/MenuItems');
const ordersController = require('../Controllers/Orders');
const paymentGatewayController = require('../Controllers/Payments');

route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealtypesController.getMealTypes);
route.get('/restaurants/:locId', restaurantController.getRestaurantsByLocation);
route.post('/login', userController.userLogin);
route.post('/signup', userController.userSignUp);
route.post('/filter', restaurantController.restaurantFilter);
route.get('/restaurant/:resId', restaurantController.getRestaurantDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);
route.post('/order', ordersController.saveOrderDetails);
route.get('/orders/:userId', ordersController.getOrdersByUserId);
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);

module.exports = route;
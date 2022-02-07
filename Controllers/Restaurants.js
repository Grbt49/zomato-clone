const Restaurants = require('../Models/Restaurants');

exports.getRestaurantsByLocation = (req, res) => {
    const locId = req.params.locId;

    Restaurants.find({ location_id: locId })
        .then(response => {
            res.status(200).json(
                {
                    message: "Restaurants Fetched Succesfully",
                    restaurants: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.restaurantFilter = (req, res) => {
    const { mealtype, location, cuisine, lcost, hcost, sort, page } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;

    const ItemsPerPage = 2;

    let startIndex = ItemsPerPage * page - ItemsPerPage;
    let endIndex = ItemsPerPage * page + 1;

    let filterObj = {};

    mealtype && (filterObj['mealtype_id'] = mealtype);
    location && (filterObj['location_id'] = location);
    cuisine && (filterObj['cuisine_id'] = { $in: cuisine });
    lcost && hcost && (filterObj['min_price'] = { $lte: hcost, $gte: lcost });


    Restaurants.find(filterObj).sort({ min_price: sort })
        .then(response => {

            // Pagination Logic

            const paginatedResponse = response.slice(startIndex, endIndex);

            res.status(200).json(
                {
                    message: "Restaurants Fetched Succesfully",
                    restaurants: paginatedResponse,
                    pageCount: Math.ceil(response.length / ItemsPerPage),
                    currentPage: page
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

getRestaurantDetailsById = (req, res) => {
    const resId = req.params.resId;

    Restaurants.findById(resId)
        .then(response => {
            res.status(200).json(
                {
                    message: "Restaurant Fetched Succesfully",
                    restaurant: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
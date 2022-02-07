const Orders = require('../Models/Orders');

exports.saveOrderDetails = (req, res) => {
    const { placedByUserName, placedByUserId, address, placedOn, items, amount, resId } = req.body;

    let orderObj = new Orders({
        placedBy: placedByUserName,
        placedByUserId,
        placedOn,
        items,
        amount,
        restaurantId: resId,
        address
    })

    orderObj.save()
        .then(response => {
            res.status(200).json(
                {
                    message: "Order Added Succesfully",
                    order: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getOrdersByUserId = (req, res) => {
    const userId = req.params.userId;

    Orders.find({ placedByUserId: userId })
        .then(response => {
            res.status(200).json(
                {
                    message: "Orders Fetched Succesfully",
                    orders: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
import Item from "../model/item.js"


// getting all items => api/v1/items
export const getItems = async (req, res) => {
    const item = await Item.find();

    res.status(200).json({
        item
    })
}

// add new item => api/v1/items
export const addItems = async (req, res) => {
    const item = await Item.create(req.body);

    res.status(200).json({
        item
    })
}
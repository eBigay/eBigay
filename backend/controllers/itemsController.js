const Item = require("../model/Item");

const getAllItems = async (req, res) => {
  const limit = req.query.limit;
  const category = req.query.category;
  const sortBy = req.query.sort;
  const order = req.query.order;
  const page = Number(req.query.page) || 1;

  const keyword = req.query.q
    ? {
        itemName: {
          $regex: req.query.q,
          $options: "i",
        },
      }
    : {};

  const categoryFilter = category ? { category: category } : {};

  const items = await Item.find({ ...keyword, ...categoryFilter })
    .populate("createdBy", "username imageUrl location phoneNumber email")
    .limit(limit)
    .skip(limit * (page - 1))
    .sort({ [sortBy]: order })
    .exec();

  if (!items) return res.status(204).json({ message: "No items found." });
  res.json(items);
};

const createNewItem = async (req, res) => {
  if (
    !req?.body?.itemName &&
    !req?.body?.description &&
    !req?.body?.qty &&
    !req?.body?.category &&
    !req?.body?.condition &&
    !req?.body?.createdBy &&
    !req?.body?.createdAt
  ) {
    return res.status(400).json({ message: "missed required field" });
  }

  try {
    const result = await Item.create({
      itemName: req.body.itemName,
      description: req.body.description,
      qty: req.body.qty,
      category: req.body.category,
      condition: req.body.condition,
      images: req.body.images,
      location: req.body.location,
      createdBy: req.body.createdBy,
      createdAt: req.body.createdAt,
    });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateItem = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  const item = await Item.findOne({ _id: req.body.id }).exec();
  if (!item) {
    return res
      .status(204)
      .json({ message: `No item matches ID ${req.body.id}.` });
  }
  if (req.body?.itemName) item.itemName = req.body.itemName;
  if (req.body?.description) item.description = req.body.description;
  if (req.body?.qty) item.qty = req.body.qty;
  if (req.body?.category) item.category = req.body.category;
  if (req.body?.condition) item.category = req.body.condition;
  if (req.body?.images) item.images = req.body.images;
  if (req.body?.location) item.location = req.body.location;
  if (req.body?.createdAt) item.createdAt = req.body.createdAt;
  if (req.body?.createdBy) item.createdBy = req.body.createdBy;
  const result = await item.save();
  res.json(result);
};

const deleteItem = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "ItemID required." });

  const item = await Item.findOne({ id: req.body.id }).exec();
  if (!item) {
    return res
      .status(204)
      .json({ message: `No item matches ID ${req.body.id}.` });
  }
  console.log(item.createdBy);
  console.log(req.user._id);
  // if (!item.createdBy.equals(req.user._id))
  //   return res.status(401).json({ message: "you are not authorized" });
  const result = await item.deleteOne(); //{ _id: req.body.id }
  res.json(result);
};

const getItem = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "ItemID required." });

  const item = await Item.findOne({ _id: req.params.id }).exec();
  if (!item) {
    return res
      .status(204)
      .json({ message: `No item matches ID ${req.params.id}.` });
  }
  res.json(item);
};

const getUserItem = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  const items = await Item.find({ createdBy: id });

  res.json(items);
};

module.exports = {
  getAllItems,
  createNewItem,
  updateItem,
  deleteItem,
  getItem,
  getUserItem,
};

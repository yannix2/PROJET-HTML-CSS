const Address = require("../models/Address");

const getAddress = async (req, res) => {
  const address = req.params.addressId;
  try {
    return res.status(200).json({ address: address });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createAddress = async (req, res) => {
  const newAddress = new Address({
    street: req.body.street,
    zipCode: req.body.zipCode,
    city: req.body.city,
  });
  try {
    const savedAddress = await newAddress.save();
    return res.status(200).json({ address: savedAddress });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateAddress = async (req, res) => {
  const address = req.params.addressId;
  try {
    const data = req.body;
    const { ...dataToUpdate } = data;
    const updatedAddress = await Address.findByIdAndUpdate(
      address._id,
      dataToUpdate,
      { new: true }
    );
    return res.status(500).json({ address: updatedAddress });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteAddress = async (req, res) => {
  const address = req.params.addressId;

  try {
    const deletedAddress = await Address.findByIdAndDelete(address._id);
    return res.status(200).json({ address: deletedAddress });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.updateAddress = updateAddress;
module.exports.createAddress = createAddress;
module.exports.deleteAddress = deleteAddress;
module.exports.getAddress = getAddress;

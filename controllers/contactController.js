// controllers/contactController.js
const db = require("../db");

// Create
exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;
  const sql = "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)";
  db.query(sql, [name, email, phone], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Contact created successfully!");
  });
};

// Read All
exports.getContacts = (req, res) => {
  db.query("SELECT * FROM contacts", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Update
exports.updateContact = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const sql = "UPDATE contacts SET name=?, email=?, phone=? WHERE id=?";
  db.query(sql, [name, email, phone, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Contact updated successfully!");
  });
};

// Delete
exports.deleteContact = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM contacts WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Contact deleted successfully!");
  });
};

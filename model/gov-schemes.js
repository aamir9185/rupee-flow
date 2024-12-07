const mongoose = require('mongoose');

// Define the schema
const govSchemesSchema = new mongoose.Schema({
  name: String,
  description: String,
  eligibility: String,
  benefits: String,
  // Add more fields as needed
});

// Check if the model already exists, if not, define it
const GovSchemes = mongoose.models['gov-schemes'] || mongoose.model('gov-schemes', govSchemesSchema);

module.exports = GovSchemes;

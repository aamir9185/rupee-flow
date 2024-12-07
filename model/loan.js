const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Eligibility Sub-Schema
const EligibilitySchema = new Schema({
  age: {
    type: String,
    required: true
  },
  income: {
    type: String,
    required: true
  },
  work_experience: {
    type: String,
    required: true
  },
  credit_score: {
    type: String,
    required: true
  }
});

// Main Loan Schema
const LoanSchema = new Schema({
  loan_name: {
    type: String,
    required: true,
    unique: true
  },
  interest_rate: {
    type: String,
    required: true
  },
  max_amount: {
    type: String,
    required: true
  },
  loan_tenure: {
    type: String,
    required: true
  },
  processing_fee: {
    type: String,
    required: true
  },
  eligibility: {
    type: EligibilitySchema,
    required: true
  },
  documents_required: [{
    type: String,
    required: true
  }],
  repayment_options: [{
    type: String,
    required: true
  }],
  special_features: [{
    type: String,
    required: true
  }],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Update the updated_at field before saving
LoanSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Create indexes for common query fields
LoanSchema.index({ loan_name: 1 });
LoanSchema.index({ 'eligibility.credit_score': 1 });
LoanSchema.index({ interest_rate: 1 });

// Create the model
const Loan = mongoose.models.Loan || mongoose.model('Loan', LoanSchema);

module.exports = Loan;



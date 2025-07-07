import mongoose from 'mongoose';

const auctionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    highestBid: { type: Number, default: 0 },
    highestBidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    endTime: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model('Auction', auctionSchema);

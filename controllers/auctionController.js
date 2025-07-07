import Auction from '../models/Auction.js';

export const createAuction = async (req, res) => {
    try {
        const { title, description, startingPrice, endTime } = req.body;
        const auction = new Auction({
            title,
            description,
            startingPrice,
            createdBy: req.user.id,
            endTime
        });
        await auction.save();
        res.status(201).json(auction);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const placeBid = async (req, res) => {
    try {
        const { bidAmount } = req.body;
        const auction = await Auction.findById(req.params.id);

        if (!auction) return res.status(404).json({ message: 'Auction not found' });

        if (bidAmount <= auction.highestBid) {
            return res.status(400).json({ message: 'Bid must be higher than the current highest bid' });
        }

        auction.highestBid = bidAmount;
        auction.highestBidder = req.user.id;
        await auction.save();

        res.json({ message: 'Bid placed successfully', auction });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

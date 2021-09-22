const ShortURL = require('../models/URLShortenerModel');

const urlShortpost = async(req, res)=>{
    try{
        await ShortURL.create(req.body);
        const shortUrls = await ShortURL.find();
        res.status(200).json({shortUrls});
    }
    catch(err){
        res.status(400).json({ errorMessage: err.message });
    }
};

const urlShortget = async(req, res)=>{
    try{
        let urlShortID = req.params.id;
        const url = await ShortURL.findOne({shortURL:urlShortID});
        url.clicks++;
        url.save();
        res.redirect(url.fullURL);
    }
    catch(err){
        res.status(400).json({ errorMessage: err.message });
    }
};

module.exports = {urlShortpost, urlShortget};
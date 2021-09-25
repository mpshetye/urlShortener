const ShortURL = require('../models/URLShortenerModel');

const urlShortpost = async(req, res)=>{
    try{
        console.log('hello controller');
        await ShortURL.create(req.body);
        res.status(200).json({msg:'url created'});
    }
    catch(err){
        res.status(400).json({ errorMessage: err.message });
    }
};

const urlShortget = async(req, res)=>{
    try{
        let urlShortID = req.params.id;
        const url = await ShortURL.findOne({shortURL:urlShortID});
        if (url == null) return res.sendStatus(404);
        url.clicks++;
        url.save();
        res.redirect(url.fullURL);
    }
    catch(err){
        res.status(400).json({ errorMessage: err.message });
    }
};


module.exports = {urlShortpost, urlShortget};
const axios = require('axios')
const config = require('../../Configuration')

const likeAction = (req,res)=>{
let updatedData = {}
axios.get(`${config.DBIp}/posts/${req.params.id}`)
    .then((dbRes) => {
        let dbResData = dbRes.data;
        if (!dbResData["PeopleLiked"]) {
            updatedData = { 'likes': Number(dbResData['likes']) + 1, 'PeopleLiked': [req.ip] }

        }

        else if (dbResData["PeopleLiked"].includes(req.ip)) {
            updatedData = { 'likes': Number(dbResData['likes']) - 1, 'PeopleLiked': dbResData['PeopleLiked'].filter(item => item !== req.ip) }
        }

        else {
            dbResData['PeopleLiked'].push(req.ip);
            updatedData = { 'likes': Number(dbResData['likes']) + 1, 'PeopleLiked': dbResData['PeopleLiked'] }
        }

        axios.put(`${config.DBIp}/posts/${req.params.id}`, updatedData)
            .then((updateDbRes) => res.send(updateDbRes))
            .catch((updateDbErr) => res.send(updateDbErr))
    })
}

module.exports = likeAction
const axios = require('axios'),
     config = require('../../../../Configuration')

const likeAction = (req,res)=>{
let updatedData = {}
axios.get(`${config.DBIp}/posts/${req.params.id}`)

    .then((dbRes) => {
        let dbResData = dbRes.data;
        //PeopleLiked is the people ids and likes is the number of likes
        if (!dbResData["PeopleLiked"]) {
            updatedData = { 'likes': Number(dbResData['likes']) + 1, 'PeopleLiked': [req.user.id] }

        }

        else if (dbResData["PeopleLiked"].includes(req.user.id)) {
            updatedData = { 'likes': Number(dbResData['likes']) - 1, 'PeopleLiked': dbResData['PeopleLiked'].filter(item => item !== req.user.id) }
        }

        else {
            dbResData['PeopleLiked'].push(req.user.id);
            updatedData = { 'likes': Number(dbResData['likes']) + 1, 'PeopleLiked': dbResData['PeopleLiked'] }
        }

        axios.put(`${config.DBIp}/posts/${req.params.id}`, updatedData)
            .then((updateDbRes) => res.send(updateDbRes))
            .catch((updateDbErr) => res.send(updateDbErr))
    })
    .catch((dbRes) => res.send(dbRes))
}

module.exports = likeAction
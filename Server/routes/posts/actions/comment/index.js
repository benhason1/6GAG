const axios = require('axios'),
    config = require('../../../../Configuration')



const commentAction = (req, res) => {
    let updatedData = {}

    axios.get(`${config.DBIp}/posts/${req.params.id}`)
        .then((dbRes) => {
            let dbResData = dbRes.data;
            if (!dbResData["comments"])
                updatedData = { "comments": [{ "commentContent": req.body.payload.content, "personPosted": req.user.username }] }
            else {
                updatedData = { "comments": [...dbResData["comments"], { "commentContent": req.body.payload.content, "personPosted": req.user.username }] }
            }

            axios.put(`${config.DBIp}/posts/${req.params.id}`, updatedData)
                .then((updateDbRes) => res.send(updateDbRes))
                .catch((updateDbErr) => res.send(updateDbErr))
        })
        .catch((dbRes) => res.send(dbRes))


}

module.exports = commentAction


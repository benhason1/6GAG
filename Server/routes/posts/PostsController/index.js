const
    axios = require('axios'),
    config = require('../../../Configuration'),
    FormData = require('form-data')
    nameToAction = require('../actions')

module.exports = {
    // list posts
    index: (req, res) => {
        axios.get(`${config.DBIp}/posts`, req)
            .then((dbRes) => {

                dbRes.data.forEach(post => {

                    if (!post["PeopleLiked"])
                        post['isLiked'] = false
                    else if (post["PeopleLiked"].includes(req.user.id))
                        post['isLiked'] = true
                    else
                        post['isLiked'] = false

                });

                res.send({ "items": dbRes.data })

            })

            .catch((err) => {
                res.status(err.response.status)
                res.send(err)
            })
    },

    // create a new post
    create: (req, res) => {
        const form = _reqToFormData(req)

        axios.post(`${config.DBIp}/posts`, form, {
            headers: form.getHeaders()
        })
            .then((dbRes) => {
                return res.send(dbRes.data)
            }
            )
            .catch((err) => {
                res.status(err.response.status)
                res.send(err.message)
            })

    },

    // update an existing post
    update: (req, res) => {
        if (!req.body['Action'])
            return res.send("request need to include action")

        let action = req.body["Action"]

        if (!nameToAction[action])
            return res.send("action doesnt exist")

        else {
            return nameToAction[action](req, res)
        }


    }
}


function _reqToFormData(req) {
    const form = new FormData();
    const { file } = req;
    const { buffer, originalname: filename } = file;

    for (let key of Object.keys(req.body)) {
        form.append(key, req.body[key])
    }

    form.append('postImage', buffer, { filename })
    return form
}


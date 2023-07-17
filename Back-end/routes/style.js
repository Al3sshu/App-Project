const { sql } = require('slonik')

const router = require('express').Router()

module.exports = (db) => {
    router.get('/get-style', async (req, res) => {
        const parameters = req.query

        const { query } = await db

        const result = await query(sql.unsafe`
            SELECT response FROM style
            WHERE season = ${parameters.season}
            AND place = ${parameters.place}
            AND hobbies = ${parameters.hobbies}
            AND hair = ${parameters.hair}
            AND color = ${parameters.color}
            AND eyes = ${parameters.eyes}
            AND skin_stone = ${parameters.skin_stone}
            AND colors_style = ${parameters.colors_style}
        `)

        console.log(result)

        res.status(200).json({
            status: 'success',
            data: result.rows[0].response
        })
    })

    return router
}

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
            AND cold_colors = ${parameters.cold_colors}
            AND warm_colors = ${parameters.warm_colors}
        `)

        res.status(200).json({
            status: 'success',
            data: result.rows[0].response
        })
    })

    return router
}

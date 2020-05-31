import {Listings} from '#root/db/models'



const setupRoutes = app => {
    app.get('/listings' , async (req, res, next) => {
        try {
            const listings = await Listings.findAll()
        
        return res.json(listings)
        } catch (error) {
            console.info(error
            )
        }
        
    })
}


export default setupRoutes
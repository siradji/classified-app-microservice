import ListingService from '#root/adapter/listingService'

const listingsResolver = async () => {
    return await ListingService.fetchAllListings()
}


export default listingsResolver
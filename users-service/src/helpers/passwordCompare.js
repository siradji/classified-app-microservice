import bcrypt from 'bcryptjs'


const passwordCompare  = (plain, hash) => bcrypt.compareSync(plain, hash)
             

export default passwordCompare
const cache = {}


const accessEnv = (key, defaultValue) => {
    console.log(defaultValue)
    if (!key in process.env) {
        if(defaultValue) return defaultValue
        throw new Error(`${key} not found in process.env. please rechech`)
    }

    if(cache[key]) return cache[key]
    
    cache[key] = process.env[key]

    return process.env[key]
}


export default accessEnv
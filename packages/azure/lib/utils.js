module.exports = {
    getBlobInfo: (connectionString) => {
        const splitString = connectionString.split('/')

        return {
            // TODO: Create a context config
            containerName: splitString[3],
            fileName: splitString[4] 
        }
    }
}
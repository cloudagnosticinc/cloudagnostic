const { BlobServiceClient } = require('@azure/storage-blob');

const { getBlobInfo } = require('../utils');

class Blob {
    constructor(accountString, connectionString) {
        this.accountString = accountString;
        this.connectionString = connectionString;

        const { containerName, fileName } = getBlobInfo(this.connectionString);

        this.containerName = containerName;
        this.fileName = fileName;
    }

    async downloadBlockBlob() {
        const blobService = BlobServiceClient.fromConnectionString(this.accountString)

        const containerClient = blobService.getContainerClient(this.containerName)
        const downloadBlockBlob = containerClient.getBlockBlobClient(this.fileName)
        const blockBlob = await downloadBlockBlob.download(0)

        return blockBlob
    }
}

module.exports = Blob
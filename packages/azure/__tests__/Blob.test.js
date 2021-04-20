const { Blob } = require('../lib')

it('should do stuff', async () => {
    const blob = new Blob('DefaultEndpointsProtocol=https;AccountName=reportingbackenddev;AccountKey=ERBFEpUiRvf9PA296NH4bzOxhmpyxzYoNsQBD8nz223Hk2SfqVRaaCQtAM7R0vnz6/+hulVLRjRPlm+QbTnPxQ==;EndpointSuffix=core.windows.net', 'azureblob://reportingbackenddev.blob.core.windows.net/sqltemplates/parent_company_lead_detail_csv.sql');

    const blockBlob = await blob.downloadBlockBlob();

    console.log(blockBlob);
})
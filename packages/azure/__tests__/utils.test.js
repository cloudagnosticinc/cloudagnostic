const { getBlobInfo } = require('../lib/utils');

it('should return array', () => {
    const blobInfo = getBlobInfo('azureblob://reportingbackenddev.blob.core.windows.net/sqltemplates/parent_company_lead_detail_csv.sql')
})
/**
 * lambda-layer.test.ts
 *
 * Unit tests for the Lambda layer function.
 */

import { mockClient } from "aws-sdk-client-mock";
import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3';
import { S3LayerService } from "/opt/nodejs/layer";
import { assert } from "console";

const s3Mock = mockClient(S3Client);

beforeEach(() => {
    s3Mock.reset();
});

describe('Unit test for lambda layer', function () {
    
    /**
     * Happy path scenario, in this case we read the event for lambaHandler
     * We mock the response for S3 Layer
     */
    it('verify response from layer', async () => {
        let result: string[];
        const s3Layer = new S3LayerService();
        s3Mock.on(ListBucketsCommand).resolves(
            {
                "Buckets": [
                  {
                     "Name": "examplebucket"
                   }
                 ]
               }
        );
        result = await s3Layer.getAllBucketNames();
        assert(result.length == 1); 
        assert(result[0] == "examplebucket");
    });

    /**
     * Unhappy path test where the id name record does not exist in the DynamoDB Table
     * We mock the response for DynamoDB GetCommand to produce a invalid response
     */

    it('verify not found path 404', async () => {

    });
});
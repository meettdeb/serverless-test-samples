// Create a method to get all buckets name from AWS S3.
import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3'

const region = process.env.AWS_REGION ?? 'us-west-2';
const s3Client = new S3Client({ region: region });
   
export class S3LayerService {
 
    async getAllBucketNames(): Promise<string[]> {
        const bucketNames: string[] = []
        const buckets = ( await s3Client.send( new ListBucketsCommand( {} ) ) ).Buckets

        if ( !buckets ) {
            return []
        }

        for ( let bucket of buckets ) {
            bucketNames.push( bucket.Name! )
        }

        return bucketNames
    }
}
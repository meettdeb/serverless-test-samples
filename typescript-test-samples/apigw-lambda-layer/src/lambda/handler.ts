import { APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda"
import { S3LayerService } from "/opt/nodejs/layer"

export const handler = async (_event:APIGatewayProxyEvent ) : Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    let statusCode = 200;
    const s3layer = new S3LayerService()
    try {
        let bucketNames: string[] = await s3layer.getAllBucketNames();
        response = {
            statusCode: statusCode,
            body: JSON.stringify({
                bucketNames,
            }),
        };
    } catch (err: unknown) {
        console.error(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: err instanceof Error ? err.message : 'some error happened',
            }),
        };
    }
    return response;
}
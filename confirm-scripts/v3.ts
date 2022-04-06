import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({ region: "ap-northeast-1" });

const client = DynamoDBDocumentClient.from(ddbClient, {
  // この設定を使うと、undefinedが渡された時にエラーにならない
  // marshallOptions: { removeUndefinedValues: true },
});

client
  .send(
    new PutCommand({
      TableName: "confirm-removeUndefinedValues",
      Item: { id: 2, hoge: undefined },
    })
  )
  .then((res) => {
    console.log(res);
  });

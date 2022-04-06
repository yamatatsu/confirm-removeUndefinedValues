import * as AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient({
  region: "ap-northeast-1",
});

documentClient
  .put({
    TableName: "confirm-removeUndefinedValues",
    Item: { id: 1, hoge: undefined },
  })
  .promise()
  .then((res) => {
    console.log(res);
  });

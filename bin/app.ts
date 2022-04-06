import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

const app = new cdk.App();
const stack = new cdk.Stack(app, "confirm-removeUndefinedValues");

new dynamodb.Table(stack, "Table", {
  tableName: "confirm-removeUndefinedValues",
  partitionKey: { name: "id", type: dynamodb.AttributeType.NUMBER },
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

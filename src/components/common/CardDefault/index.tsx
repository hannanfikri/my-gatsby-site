import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

type Props = {
  child: string;
  context: string;
};

const CardDefault = (props: Props) => {
  return (
    <>
      <Card className="m-3">
        <CardHeader>
          <Typography>{props.child}</Typography>
        </CardHeader>
        <CardBody>
          <Typography>{props.context}</Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default CardDefault;

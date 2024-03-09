import { Card, CardHeader } from "@material-tailwind/react";
import React from "react";

type Props = {};

export default function CardDefault(): Props {
  return (
    <>
      <Card className="m-3">
        <CardHeader>
          <div>aaa</div>
        </CardHeader>
      </Card>
    </>
  );
}

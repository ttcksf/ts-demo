import React from "react";

type Props = {};

const AnyUnknown = (props: Props) => {
  const testAny: any = "any";
  console.log(testAny);

  const testUnknown: unknown = "unknown";
  console.log(testUnknown);

  const objAny: any = {
    id: "0001",
    name: "aaa",
  };
  console.log(objAny.id);

  type ObjType = {
    id: string;
    name: string;
  };
  const objKnown: unknown = {
    id: "0001",
    name: "bbb",
  };
  console.log((objKnown as ObjType).id);

  return <div>AnyUnknown</div>;
};

export default AnyUnknown;

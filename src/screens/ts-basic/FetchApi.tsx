import React from "react";
import Todo from "./Todo";

const FetchApi = () => {
  type todoProps = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const data = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      // const json = await response.json();
      // 想定される型を取得したデータに指定する
      const json: todoProps = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return <div>{data.id} </div>;
};

export default FetchApi;

const func1 = (name: string, num?: number) => {
  console.log(name, num);
};
func1("aaa");
// 引数が多いと煩雑になるため事前に型定義をしておく。他にも転用できるため現在の主流の書き方になっている
type argType = {
  name: string;
  num?: number;
};
const func2 = (arg: argType) => {
  console.log(arg.name, arg.num);
};
// 関数の引数はオブジェクトで準備したため、関数の実行時の書き方の変更には初学者は注意
func2({ name: "aaa" });

type initFunc = (first: string, second?: number) => void;
const func3: initFunc = (name, num) => {
  console.log(name, num);
};
func3("aaa");

// タイプと似たようなものでインターフェースもある、タイプと若干書き方が違うため初学者は注意
interface ArgInterFace {
  id: string;
  name: string;
  age: number;
}
// 継承ができる
interface User extends ArgInterFace {
  address: string;
}

const test1: ArgInterFace = {
  id: "0001",
  name: "aaa",
  age: 20,
};
// Userを型定義に利用する場合はaddressが無いとダメ
const test2: User = {
  id: "0002",
  name: "bbb",
  age: 21,
  address: "tokyo",
};
// 項目の有無が不明確だったり何回も継承する場合はextraが使える
interface Category {
  category: string;
}
interface Tag {
  tag: string;
}
interface ArgMore<T> {
  id: string;
  title: string;
  desc: string;
  extra: T[];
}
// 基本情報にカテゴリーを追加したいとき
const blog1: ArgMore<Category> = {
  id: "0001",
  title: "title1",
  desc: "desc1",
  extra: [{ category: "category1" }],
};
// 基本情報にタグを追加したいとき
const blog2: ArgMore<Tag> = {
  id: "0001",
  title: "title1",
  desc: "desc1",
  extra: [{ tag: "tag1" }],
};

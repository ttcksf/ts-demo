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

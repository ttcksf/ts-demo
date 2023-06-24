let str = "hello";
// tsファイルの中では一度文字列を入れたために数字の代入に警告文が出る
// str = 18;
// TypeScriptの主な役割は型を守ること
let num: number = 18;
num = 20;

// 型は2種類にすることもできる
let memberId: string | number = "0001";
memberId = 12;

// 配列の中の要素にも方指定できる
// let arr: string[] = ["aaa", "bbb", "ccc"];
let arr: (string | number)[] = ["aaa", "bbb", "ccc"];
arr.push(1);
arr.push("1");

// オブジェクトの型定義は先に型定義のみのコードを書いておくことが多い
let obj1: {
  id: string;
  name: string;
  age: number;
};
// 型定義をすると定義した内容から過不足なく作ることが求められる
// obj1 = {
//   id: "0001",
//   name: "aaa",
// };
// 任意のプロパティは条件付きで用意すればOK
let obj2: {
  id: string;
  name: string;
  age?: number;
};
obj2 = {
  id: "0001",
  name: "aaa",
};

// 関数はデフォルトでは引数と戻り値に型を指定する
const func1 = (str: string, num?: number): string => {
  console.log(str);
  return "bbb";
};
func1("aaa");
// 関数の戻り値ではvoidという型があり、戻り値を不要とするもの
const func2 = (str: string): void => {
  console.log(str);
  // return "bbb";
};
func2("aaa");

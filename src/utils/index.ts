import datjs from "dayjs";
// dayjs是时间处理库，
// 包括获取当前时间、时间格式化、获取过去和未来时间、获取周期的开始和结束时间、
// 计算时间差、转换时间戳、获取月份天数以及显示相对时间
export const FormatTime = (date: Date | string) => {
  return datjs(date).format("YYYY/MM/DD hh:mm");
};

// 获取localStorage中的数据
// localStorage是浏览器提供的本地存储API，可以在用户的浏览器中存储数据
export const localGetItem = (key: string): any => {
  let data_str = localStorage.getItem(key);
  if (data_str) {
    return JSON.parse(data_str);
  }
  return null;
};

// 设置localStorage中的数据
export const localSetItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 生成随机数ID
export const geneId = (): number => {
  return Math.floor(Math.random() * 939874);
};

// 模拟HTTP请求
export const ImitateHttp = (
  fun: (s: Function, f: Function) => void,
  timer = 1000
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fun(resolve, reject);
    }, timer);
  });
};

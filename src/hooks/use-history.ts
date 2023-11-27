import { User } from "../utils/user-data-handler";

type PropsTypes = {
  url: string;
  text: string;
};

interface IHistoryData extends PropsTypes {
  date: string;
}

export const useHistory = () => {
  return function (data: PropsTypes) {
    const result: IHistoryData = {
      date: new Date().toLocaleString("ru"),
      url: data.url,
      text: data.text,
    };
    User.setHistory(result);
  };
};

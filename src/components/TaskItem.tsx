import React from "react";
import { Task } from "../Types";

type Props = {
  task: Task;
};
const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    // リスト表示するのでliタグを使用
    <li>
      <label>
        <input type="checkbox" className="checkbox-input" />
        <span className="checkbox-label">{task.title}</span>
      </label>
      <button className="btn is-delete">削除</button>
    </li>
  );
};

export default TaskItem;

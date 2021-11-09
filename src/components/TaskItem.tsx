import React from "react";
import { Task } from "../Types";

type Props = {
  task: Task;
  // returnは無いのでvoidで指定
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
  return (
    // リスト表示するのでliタグを使用
    <li className={task.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          // handleDoneは引数にtaskを渡す必要があるので関数の形にする
          onClick={() => handleDone(task)}
          // 初期値の設定
          defaultChecked={task.done}
        />
        <span className="checkbox-label">{task.title}</span>
      </label>
      <button onClick={() => handleDelete(task)} className="btn is-delete">
        削除
      </button>
    </li>
  );
};

export default TaskItem;

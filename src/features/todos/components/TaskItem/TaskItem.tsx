import { Button } from '../../../../components/Button';
import { Checkbox } from '../../../../components/Checkbox';
import { TaskItemProps } from '../../types';
import styles from './TaskItem.module.css';

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
}) => {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
      />
      <span className={styles.taskText}>{task.text}</span>
      <Button
        onClick={handleDelete}
        variant="danger"
        className={styles.deleteButton}
      >
        削除
      </Button>
    </li>
  );
};
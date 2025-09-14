import { Button } from '../../../../components/Button';
import { TaskCounterProps } from '../../types';
import styles from './TaskCounter.module.css';

export const TaskCounter: React.FC<TaskCounterProps> = ({
  activeCount,
  onClearCompleted,
}) => {
  return (
    <div className={styles.taskCounter}>
      <span className={styles.count}>{activeCount} 個のタスク</span>
      <Button
        onClick={onClearCompleted}
        variant="secondary"
        className={styles.clearButton}
      >
        完了したタスクを削除
      </Button>
    </div>
  );
};
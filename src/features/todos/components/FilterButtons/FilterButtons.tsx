import { Button } from '../../../../components/Button';
import { FilterButtonsProps, FilterType } from '../../types';
import styles from './FilterButtons.module.css';

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'すべて' },
    { key: 'active', label: '未完了' },
    { key: 'completed', label: '完了済み' },
  ];

  return (
    <div className={styles.filterButtons}>
      {filters.map(({ key, label }) => (
        <Button
          key={key}
          onClick={() => onFilterChange(key)}
          variant={currentFilter === key ? 'primary' : 'secondary'}
          className={styles.filterButton}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
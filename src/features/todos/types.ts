// TODO機能固有の型定義

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TaskFormProps {
  onAddTask: (text: string) => void;
}

export interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export interface TaskCounterProps {
  activeCount: number;
  onClearCompleted: () => void;
}
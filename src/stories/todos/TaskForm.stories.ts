import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TaskForm } from '../../features/todos/components/TaskForm';

const meta: Meta<typeof TaskForm> = {
  title: 'Features/Todos/Components/TaskForm',
  component: TaskForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onAddTask: action('onAddTask'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
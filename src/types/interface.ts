import React from "react";

export interface Task {
  id: string|number
  text: string
  completed: boolean
  isEdited: boolean
}

export interface TodoItemProps {
  task: Task;
  handleDelete: (id: string|number) => void;
  handleComplete: (id: string|number) => void;
  handleChange: (id: string|number) => void;
}

export interface TodoFormProps {
  value: string;
  setValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

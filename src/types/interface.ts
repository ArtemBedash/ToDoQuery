import React from "react";

export interface Task {
  id: string
  text: string
  completed: boolean
  isEdited: boolean
}

export interface TodoItemProps {
  task: Task;
  handleDelete: (id: string) => void;
  handleComplete: (id: string) => void;
  handleChange: (id: string) => void;
}

export interface TodoFormProps {
  value: string;
  setValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

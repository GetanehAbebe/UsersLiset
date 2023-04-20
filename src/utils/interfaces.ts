import React, { InputHTMLAttributes } from "react";
export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  image: string;
  id: string;
}

export interface EditedPerson {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
}
export interface Message {
  content: string;
  username: string;
  sendTime: string;
  roomId: string;
  receiveTime: string;
  contentType: string;
  messageId: string;
  wordLength?: number;
}

export interface Room {
  name: string;
  messages: Message[];
  roomId: string;
  createTime: string;
  wordLength?: string;
}

export const Rooms: Record<string, Room> = {};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value?: string;
  label: string;
}

export interface OptionProps {
  value: string;
  name: string;
}

export interface SelectProps {
  options: OptionProps[];
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
  id: string;
  name: string;
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  cursor?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  bold?: boolean;
  fontSize?: string;
}

export interface FlexProps {
  justifyContent?: string;
  direction?: string;
  wrap?: string;
  grow?: number;
  flow?: string;
  shrink?: number;
  basis?: string;
  order?: string;
  flex?: string;
  children?: any;
  width?: string;
  height?: string;
}

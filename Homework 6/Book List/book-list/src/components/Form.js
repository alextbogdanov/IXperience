import React from 'react'
import FormTextInput from './FormTextInput';
import SubmitButton from './SubmitButton';

export default function form() {
  return (
    <form>
        <FormTextInput name="title" text="Title" />
        <FormTextInput name="author" text="Author" />
        <FormTextInput name="isbn" text="ISBN#" />
        <SubmitButton />
    </form>
  )
}
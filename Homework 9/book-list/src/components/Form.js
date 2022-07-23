import React, { useState } from 'react'
import FormTextInput from './FormTextInput';
import SubmitButton from './SubmitButton';
import Book from '../models/Book';

export default function Form(props) {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [isbnInput, setIsbnInput] = useState('');


  function onFormSubmit(event) {
    event.preventDefault();

    if(titleInput.trim() !== '' && authorInput.trim() !== '' && isbnInput.trim() !== '') {
      const newBook = new Book(titleInput, authorInput, isbnInput);
      props.createBook(newBook);
    }

    setTitleInput('');
    setAuthorInput('');
    setIsbnInput('');
  }

  return (
    <form onSubmit={onFormSubmit}>
        <FormTextInput name="title" text="Title" value={titleInput} changeEvent={setTitleInput} />
        <FormTextInput name="author" text="Author" value={authorInput} changeEvent={setAuthorInput} />
        <FormTextInput name="isbn" text="ISBN#" value={isbnInput} changeEvent={setIsbnInput} />
        <SubmitButton />
    </form>
  )
}
const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article one',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article two',
      shortDescription: 'Short description of the second article...',
      content: 'Main content of the second article',
      publishedDate: new Date('02-03-2022'),
      author: 'Rambo John'
    },
    {
      id: '3',
      title: 'Article title',
      shortDescription: 'Short description of the third article...',
      content: 'Main content of the third article',
      publishedDate: new Date('02-03-2022'),
      author: 'Johny Rambo'
    }
  ]
};
export default initialState;

const initialState = {
  posts: [
    {
      id: '1',
      category: 'Movies',
      title: 'Article one',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02/02/2022'),
      author: 'John Doe'
    },
    {
      id: '2',
      category: 'News',
      title: 'Article two',
      shortDescription: 'Short description of the second article...',
      content: 'Main content of the second article',
      publishedDate: new Date('02/03/2022'),
      author: 'Rambo John'
    },
    {
      id: '3',
      category: 'Sport',
      title: 'Article title',
      shortDescription: 'Short description of the third article...',
      content: 'Main content of the third article',
      publishedDate: new Date('02/03/2022'),
      author: 'Johny Rambo'
    }
  ],
  categories: [
    { id: '1', name: 'Sport' },
    { id: '2', name: 'News' },
    { id: '3', name: 'Movies' }
  ]
};
export default initialState;

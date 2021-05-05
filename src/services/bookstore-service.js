
export default class BookStoreService {


   data = [
    {
      id: 1,
      author: "Susan J.Fowler",
      title: "Production-Ready Microservices",
      price: 32,
      coverImage: 'aa'
    },
    {
      id: 2,
      author: "Michael T.Nygard",
      title: "Release It !",
      price: 45,
      coverImage : 'bb'
    }
  ];

  getBooks (){
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve (this.data)
      }, 500);
    });
  };
};

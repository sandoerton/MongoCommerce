db.resumoProdutos.insertMany([{
  franquia: "McDonalds",
  totalProdutos: db.produtos.count({}),
}]);

db.resumoProdutos.find({}, {
  franquia: true,
  totalProdutos: true,
  _id: false,
});

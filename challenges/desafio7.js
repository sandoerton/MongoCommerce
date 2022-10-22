db.produtos.find({
  tags: { $exists: 0 },
  vendidos: { $ne: 50 },
}, {
  nome: true,
  vendidos: true,
  _id: false,
});

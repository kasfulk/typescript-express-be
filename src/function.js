const home = (req, res) => {
  res.send({
    message: 'API OK!'
  });
};

const getRandomQuotes = (req, res) => {
  res.send({
    message: 'Random Quotes Here!'
  });
};

module.exports = {
  home,
  getRandomQuotes
};

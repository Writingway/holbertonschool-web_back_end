class AppController {
  static getHomepage(req, res) {
    res.send(200, 'Hello Holberton School!');
  }
}

module.exports = AppController;

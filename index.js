const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')
const db = require('./src/database')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  var metadata = {
    "name": "Arkius Members",
    "description": "Arkius Members are adorable aquatic beings primarily for demonstrating what can be done using the OpenSea platform. Adopt one today to try out all the OpenSea buying, selling, and bidding feature set.",
    "image": "https://openseacreatures.io/image.png",
    "external_link": "https://openseacreatures.io",
    "seller_fee_basis_points": 100, //# Indicates a 1% seller fee.
    "fee_recipient": "0x287A135702555F69BA6eE961f69ee60Fbb87A0e8" //# Where seller fees will be paid to.
}
  res.send(metadata);
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const token = db[tokenId]

  res.send(token);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
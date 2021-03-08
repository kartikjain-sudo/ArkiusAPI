var nft_obj = {};

function formatted_string(pad, str) {
  return (pad+str).slice(-pad.length);
}

for(var i=1;i<101;i++) {
  nft_obj[Object.keys(nft_obj).length+1] = {
    Membership_token: 098789
    Payment:{
      Paid: true/false
      Amount: 0000
    }
    “Identified”: true/false
    “Certifier”: true/false
    “Entity”: true/false:
    “values”:{
      “Propose”: “…….”
      “Modify”: true/false
      “Vote”: true/false  (vote can be only true, if identified and paid both is true)
      “Comment/Review”: true/false
    }
    “Certifications”:{
      “Propose”:
      “Modify”: 
      “Vote”: 
      “Comment/Review”:
    }
    “Forum Posts”:{
      “Create”:
      “Modify”:
      “Reply”:
      “Vote” :
    }
    “Proposals/Petitions”:
    “Entity certificate token”:
    “Champion” : true/false
    “Budget”:{
      “Vote”:
      “modify”:
      “compensation”
      “comment/review”:
      “propose”
    }
  }
}

module.exports = nft_obj;
// = {
  
//   "1": {
//     "name": "Royale Rarities - Queen of Queens (Origins Series)",
//     "description": "Origins Series (#001 of 36)",
//     "image": "https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen01.jpg",
//     "external_url": "",
//     "attributes": [
//     ]
//   }
  
// }

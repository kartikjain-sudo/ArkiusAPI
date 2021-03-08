// var nft_obj = {};

// function formatted_string(pad, str) {
//   return (pad+str).slice(-pad.length);
// }

// for(var i=1;i<101;i++) {
//   nft_obj[Object.keys(nft_obj).length+1] = {
//     Membership_token: 098789,
//     Payment:{
//       Paid: true,
//       Amount: 0000
//     },
//     Identified: true,
//     Certifier: true,
//     Entity: true,
//     values:{
//       Propose: " ",
//       Modify: true,
//       Vote: true, // (vote can be only true, if identified and paid both is true)
//       Comment: true,
//     },
//     Certifications:{
//       Propose: " ",
//       Modify: " ",
//       Vote: " ", 
//       Comment: " ",
//     },
//     Forum_Posts:{
//       Create: " ",
//       Modify: " ",
//       Reply: " ",
//       Vote: " ",
//     },
//     Proposal: " ",
//     Entity_certificate_token:  " ",
//     Champion : true;
//     Budget:{
//       Vote: " ",
//       modify: " ",
//       compensation: " ",
//       comment: " ",
//       propose: " ",
//     }
//   }
// }

// module.exports = nft_obj;
// // = {

// //   "1": {
// //     "name": "Royale Rarities - Queen of Queens (Origins Series)",
// //     "description": "Origins Series (#001 of 36)",
// //     "image": "https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen01.jpg",
// //     "external_url": "",
// //     "attributes": [
// //     ]
// //   }

// // }


var nft_obj = {};

function formatted_string(pad, str) {
  return (pad + str).slice(-pad.length);
}
// for(var i=1;i<4;i++) {
//   nft_obj[Object.keys(nft_obj).length+1] = {
    // "name": "MemberApi",
    // "description": Arkius member,
    // "image": ``,
    // "external_url": "",
    // "attributes": [
    // ]
//   }
// }
for (var i = 1; i < 100; i++) {
  nft_obj[Object.keys(nft_obj).length + 1] = {
    "name": `Member ${i}`,
    "description": `Arkius Member`,
    "image": `https://ipfs.io/ipfs/QmPey2czyZyiDMa6MJtoVRFKPHfUHrZawr1ZMoh9AhJU1y?filename=Screenshot_1.png`,
    "external_url": "",
    "attributes": [
    ],
    "MembershipToken":`Member ${i}`,
    "Payment": {
      "Paid": false,
      "Amount": 0
    },
    "Identified": false,
    "Certifier": false,
    "Entity": false,
    "values": {
      "Propose": '',
      "Modify": false,
      "Vote": false,
      "Comment/Review": false
    },
    "Certifications": {
      "Propose": '',
      "Modify": '',
      "Vote": '',
      "Comment/Review": ''
    },
    "ForumPosts": {
      "Create": '',
      "Modify": '',
      "Reply": '',
      "Vote": ''
    },
    "Proposals/Petitions": '',
    "EntityCertificateToken": '',
    "Champion": false,
    "Budget": {
      "Vote": '',
      "modify": '',
      "compensation": '',
      "comment/review": '',
      "propose": ''
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
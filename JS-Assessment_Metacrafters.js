// Bianca Angela D. Ramos, 2.5BSIT, National Teachers College

// an array variable to hold the NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _accessories) {
   const NFT = {
      "name": _name,
      "eyeColor": _eyeColor,
      "shirtType": _shirtType,
      "accessories": _accessories
   }
   NFTs.push(NFT);
   console.log("Minted: " + _name);
}


// the "for" loop will go through an array 
// and will their the metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++){
      console.log("\nID: \t\t" + (i + 1));
      console.log("Name: \t\t" + NFTs[i].name);
      console.log("Eye Color: \t" + NFTs[i].eyeColor);
      console.log("Shirt Type: \t" + NFTs[i].shirtType);
      console.log("Accessories: \t" + NFTs[i].accessories);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Krystle", "Black", "Blouse", "Hair Clamp");
mintNFT("Randel", "Black", "T-Shirt", "Rings");
mintNFT("Christian", "Black", "Hoodie", "Necklace");
mintNFT("France", "Black", "Sweater", "Bracelet");
mintNFT("Elysha", "Black", "Blouse", "Necklace");
listNFTs();
getTotalSupply();

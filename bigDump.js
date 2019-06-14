//The Speaker - an Alexa Skill for Destiny 2






// Requiring fs module in which 
// writeFile function is defined. 
const fs = require('fs') 
  
// Data which will write in a file. 
let data = "Learning how to write in a file."
  




const axios = require('axios');

const HEADERS = {"X-API-Key":'3bc3f6c4a6a443e8be34ba4d366a2187'}

const base_url = "https://www.bungie.net/platform/Destiny2/"
const xur_url = "https://www.bungie.net/Platform/Destiny2/Vendors\/?components=402"
const hashType = "6"

const plumbingItemDef = "https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json"

let xur_inventory
let itemDefRes

console.clear()
console.log ("##################################################")
console.log ("## STARTING UP")
console.log ("##################################################")
		
// Hit destiny.plumbing API for giant JSON
axios.get(plumbingItemDef)
  .then(response => {
  	itemDefRes = response
  	console.log('\n\nManifest JSON retrieved\n\n')
  	// console.log(response.data['4285666432']['displayProperties']['name'])
  	getNames()
  })
  .catch(error => {
    console.log("ERROR:",error);
  }); 


let dump = {}

getNames = () =>{
	// console.log(itemDefRes.data)
	Object.keys(itemDefRes.data).forEach((item)=>{
		// console.log(item)
		dump[item] = itemDefRes.data[item]['displayProperties']['name']
		// console.log(itemDefRes.data[itemHash]['displayProperties']['name'])

	})



// Write data in 'Output.txt' . 
		fs.writeFileSync('./data.json', JSON.stringify(dump) , 'utf-8') 

		console.log("File done.")

	// console.log(itemDefRes.data['4285666432']['displayProperties']['name'],itemDefRes.data['4285666432']['displayProperties']['name'])


}


// Hit bungie API for XUR
// getXur = () =>{
// 	axios.get(xur_url,{headers:HEADERS})
//   .then(response => {
//   	console.log ("Connecting to Bungie: " + xur_url + "\n")
// 		console.log ("Fetching data for: Xur's Inventory!")
//     xur_inventory  = response["data"]["Response"]["sales"]["data"]["2190858386"]["saleItems"]
    
//    	// Display Xur's inventory
//     console.log ("\n##################################################")
// 		console.log ("## Xur's inventory:")
// 		console.log ("##################################################")
// 		console.log(xur_inventory)

//     // fire function to itterate through his inventory
//     itterateInventory(xur_inventory)

//   })
//   .catch(error => {
//     console.log("ERROR:",error);
//   }); 
// }

// let say = ""	
// itterateInventory = (inventory) => {
// 	console.log ("\n##################################################")
// 	console.log ("## Item Names:")
// 	console.log ("##################################################")

// 	Object.keys(inventory).forEach((item)=>{
// 		let itemHash = inventory[item]['itemHash']
// 		say = say + itemDefRes.data[itemHash]['displayProperties']['name'] + ', '
//   	// console.log(itemDefRes.data[itemHash]['displayProperties']['name'])

// 	})
// 	say = say.slice(0, -2)
// 	console.log(say)
// 	console.log('\n\n\n')
// }


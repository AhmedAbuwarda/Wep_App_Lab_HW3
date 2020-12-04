const data = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];

// display all tapping
console.log("Display all tapping: ");
for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data[j].topping.length; i++) {
        console.log(data[j].topping[i].type);
    }
}

// display all batters
console.log("\nDisplay all batters: ");
for (let j = 0; j < data.length; j++) {
     for (let i = 0; i < data[j].batters.batter.length; i++) {
         console.log(data[j].batters.batter[i].type);
    }
}

// Ppu average & Ppu sum
console.log("\nPpu average & Ppu sum: ");
var element = 0;
for (let i = 0; i < data.length; i++) {
    element += data[i].ppu;
}
console.log("Ppu average: " + element/data.length);
console.log("Ppu sum: " + element);

// display all ids
console.log("\ndisplay all ids: ");
for (let i = 0; i < data.length; i++) {
    console.log("id: " + data[i].id);
}
console.log("");
for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data[j].topping.length; i++) {
        console.log("id: " + data[j].topping[i].id);
    }
}
for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data[j].batters.batter.length; i++) {
        console.log("id: " + data[j].batters.batter[i].id);
   }
}
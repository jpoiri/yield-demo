import Component from "@ember/component";

export default Component.extend({
	classNames: ["tomster-panel"],

	actions: {
		randomizeTomsters() { 
		const random = Math.floor(Math.random() * 10) + 1;
			switch (random) {
				case 1:
					this.set("theme", "brazil");
					break;
				case 2:
					this.set("theme", "berlin");
			break;
				case 3:
					this.set("theme", "paris");
			break;
				case 4:
					this.set("theme", "serbia");
			break;
				case 5:
					this.set("theme", "viking");
			break;
				case 6:
					this.set("theme", "seattle");
			break;
				case 7:
					this.set("theme", "russian");
			break;
				case 8:
					this.set("theme", "pirate");
			break;
				case 9:
					this.set("theme", "austin");
			break;
				case 10:
					this.set("theme", "jacksonville");
			break;
			}
		}
	}
});

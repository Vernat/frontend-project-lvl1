install:
		npm install

startEven:
		npx babel-node src/bin/brain-even.js

startCalc:
		npx babel-node src/bin/brain-calc.js

startGcd:
		npx babel-node src/bin/brain-gcd.js

startProgression:
		npx babel-node src/bin/brain-progression.js

publish:
		npm publish --dry-run

link:
		npm publish --dry-run 
		npm link

lint:
		npx eslint .
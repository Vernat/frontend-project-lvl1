install:
		npm install

startEven:
		npx babel-node src/bin/brain-even.js

startCalc:
		npx babel-node src/bin/brain-calc.js

startGcd:
		npx babel-node src/bin/brain-gcd.js

publish:
		npm publish --dry-run

lint:
		npx eslint .
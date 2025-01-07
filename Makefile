install: # установить зависимости
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

brain-even: # запуск игры на нахождение четного и нечетного числа
	node bin/brain-even.js

brain-calc: # запус игры калькулятора
	node bin/brain-calc.js

brain-gcd: # запуск игры по нахождению наибольшего общего делителя
	node bin/brain-gcd.js

publish: # отладка публикации пакета
	npm publish --dry-run

eslint: # запуск линтера
	npx eslint .
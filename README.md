```
npm init --y
npm i -D typescript @types/express ts-node nodemon
npx tsc --init
npm i express mongoose
```
add this to tsconfig.json
```
"include": ["src/**/*.ts"]
```
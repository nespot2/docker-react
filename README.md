## docker-react

- docker, react 공부용 프로젝트 입니다.

### npm run start 

- docker-compose up  --build

### npm run build

- docker build -t nespot2/web .
- docker run -d -p 8080:80 --name web nespot/web
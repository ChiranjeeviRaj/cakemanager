Cake Manager Micro Services using Spring Boot and React
=======================================================

# Summary
-I have converted the project to Spring Boot Microservices with React UI front end. 
-Unit tests added.
-Docker Containerisation integrated

## Build locally :
`./mvnw spring-boot:run -Pprod`

# Web UI:
URL : http://localhost:8080 - Display the react UI cake list

if you like to run UI and Services seperately by running below commands then the browser will open on http://localhost:3000

`mvn spring-boot:run`
`cd cake-ui`
`yarn install`
`yarn start`

# API:
-GET http://localhost:8080/cakes - Display JSON format cakes

-POST http://localhost:8080/cakes - Create a new cake

-GET /cake/{id} - Returns the details of a single cake


# Docker Containerisation :
Run the below commands that will create docker image and run the app locally.
`mvn spring-boot:build-image`
`docker run -it -p8080:8080 cakemanager:0.0.1-SNAPSHOT`

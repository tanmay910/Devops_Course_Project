# E-Commerce Web Application using MERN Stack and Microservices Architecture

## Description
This is a web application for an e-commerce store that sells games. It is built using the MERN stack and Microservices Architecture. The application consists of multiple microservices, each running as a separate Docker container. The microservices architecture includes services such as user authentication, product management, cart management, and order processing.

## Project Structure
The repo contains 4 microservices, each with its own folder, Dockerfile, and configuration. These services are:

- **User Service** (Authentication & User Management)
- **Product Service** (Product Catalog)
- **Cart Service** (Cart Management)
- **Order Service** (Order Management)

There is also a **common `docker-compose.yml`** file to orchestrate and run all the microservices together.

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-repo/e-commerce-mern-microservices.git
cd e-commerce-mern-microservices
```

### 2. Setup environment variables:
Create a `.env` file in the root directory and add the following environment variables (replace all #### with your own values):
```bash
PORT=####
MONGO_USERNAME=####
MONGO_PASSWORD=####
MONGO_CLUSTER=####
MONGO_DBNAME=####
ACCESS_TOKEN=####
```

### 3. Build and Run Containers using Docker Compose:
To spin up all the services, simply run the following command:
```bash
docker-compose up --build
```
This will:
- Build Docker images for each microservice.
- Start all the containers as defined in the `docker-compose.yml` file.

### 4. Accessing the Application:
Once the containers are up and running, you can access the application:
- **Backend Services:** The services will be running on their respective ports as specified in the `docker-compose.yml` file. For example, if the `PORT` for the frontend is set to `3000`, the service will be available at `http://localhost:3000/`.
- **Frontend:** If you want to run the frontend separately, navigate to the `frontend` directory, install dependencies, and start the Vite development server:
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173/`.

### 5. Checking the Running Containers:
To verify that all containers are running, use the following command:
```bash
docker ps
```
You should see all your microservices containers running.

### 6. Getting the Container IP Address:
If you need to access a specific container by IP address (e.g., for debugging or networking), use:
```bash
docker inspect <container_id> | grep "IPAddress"
```
Then, you can access the services at `http://<container_ip>:<port>/`.


## Technologies
- [React vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Microservices Architecture]()

## Contributors 
- [Anubhav Gupta](https://github.com/anubhav-0910)
- [Ayush Jain](https://github.com/Ayushjain0)
- [Rohit Chaudhari](https://github.com/Rohit-gits0)
- [Chintan Chawda](https://github.com/imperialrogers)
- [Imroz Khan](https://github.com/I-Zz)
- [Shubham Kumar](https://github.com/shubhamiiitdwd)
- [Tanmay Mahajan](https://github.com/tanmay910)
- [Sanskar Suri](https://github.com/Sanskar50)
- [Satyajeet Kumar](https://github.com/satya95760)


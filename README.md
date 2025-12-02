# Society Rating System

A full-stack web application for rating societies, submitting feedback, and managing comments.  
Built using Spring Boot, React.js, and MongoDB.

## Features
- Submit ratings for societies
- Add comments and feedback
- Full CRUD operations
- REST API with Spring Boot
- MongoDB for data storage
- Responsive React.js frontend
- Smooth frontend–backend integration

## Demo
Upload your MP4 in a GitHub Issue and paste the asset link below:

https://github.com/pawan-sonakul/society-rating/assets/your-video-id

## Tech Stack
**Backend:** Spring Boot (Java)  
**Frontend:** React.js  
**Database:** MongoDB  



## API Endpoints
| Method | Endpoint            | Description          |
|--------|----------------------|----------------------|
| GET    | /api/ratings         | Get all ratings      |
| POST   | /api/ratings         | Create new rating    |
| GET    | /api/ratings/{id}    | Get rating by ID     |
| PUT    | /api/ratings/{id}    | Update rating        |
| DELETE | /api/ratings/{id}    | Delete rating        |

## Setup Instructions

### Run Backend and Frontend

```bash
# 1. Start Backend (Spring Boot)
cd backend
./mvnw spring-boot:run

# 2. Start Frontend (React)
cd ../frontend
npm install
npm run dev

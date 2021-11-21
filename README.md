# Daily Sleep Tracker 
![Status Working](https://img.shields.io/badge/status-working-green)

# Description
This application provides a trend analysis of the sleep evolution of the user by using a CRUD API. The technology for the frontend solution is ReactJS while for the backend tasks, Express together with MongoDB are the technologies selected. 

Based on the idea from [Daily Sleep Tracker in Code Mentor](https://www.codementor.io/projects/web/daily-sleep-tracker-web-app-byi4kpk5rt)

# Data Structures
```js
{
    id: ID,
    date: date,
    startTime: time,
    endTime: time, 
    wakeUpStatus: number,
}
```

# Data Flow
## User Insertion
1. New Entry
2. Date is automatically obtained from current time, however, the user is able modify it. 
3. Start Time
4. End Time 
5. Wake Up Status 
6. Send

## User Analysis
1. Direct access
2. Dashboard access

# Development phases 
1. Data definition
- [ ] Object definition and description.
- [ ] Data Request/Response definition.

2. Frontend workflow design
- [ ] Access workflow 
- [ ] New entry workflow 
- [ ] Basic dashboard design 

3. Backend definition and implementation
- [ ] Routes definition
- [ ] Response definition
- [ ] Response implementation
- [ ] Testing 

4. Frontend design and deployment
- [ ] Full design definition
- [ ] Component-based design description 

# Version Roadmap
## 0.1-pre
### Milestones
* Stanmdards definition
* Objects definitions
* Local infrastructure deployment
* Docker pre-design 

## 0.2-pre
* Backend initial local deployment
* Backend functional design and test 

## 0.3-pre 
* Frontend initial local deployment
* Design phase
* Design definitions: Color palette, WebApp structure, Responsive design 

## 0.4-pre
* Frontend Graph implementation
* Frontend Dashboard implementation

## 0.5-pre
* Interaction test 
* Workflow analysis 
* Login/Logout design and implementation in backend. 

## ✅ 1.0 First Stable Version 
* Full deployment
  * Backend deployment with dockers and git 
  * Frontend deployment in mdgmedia.es servers 


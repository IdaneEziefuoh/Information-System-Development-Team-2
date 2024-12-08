# Requirements

## User Needs

### User stories
As a tourist, I want to find historical sites near my current location so that I can easily explore Bristol’s heritage without extensive planning.

As a local resident, I want to discover lesser-known historical landmarks in Bristol so that I can learn more about my city’s history.

As a student, I want to search for historical sites by specific time periods or themes so that I can find relevant information for my school projects.

As a history enthusiast, I want to save a list of my favorite historical sites so that I can revisit them and share recommendations with friends.

As a parent, I want to find child-friendly historical sites or walking routes so that my family can enjoy educational outings together.

### Actors
Tourists: Visitors to Bristol who want to explore the city’s historical sites.

Local Residents: People living in Bristol who are interested in discovering more about their city's history.

Students: Individuals using the app as a resource for educational purposes.

History Enthusiasts: Users with a strong interest in exploring historical locations and learning about the past.

Parents: Families seeking educational and enjoyable activities for their children.

### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| TODO: USE-CASE ID e.g. UC1, UC2, ... | TODO: USE-CASE NAME | 
| -------------------------------------- | ------------------- |
| **Description** | TODO: Goal to be achieved by use case and sources for requirement |
| **Actors** | TODO: List of actors involved in use case |
| **Assumptions** | TODO: Pre/post-conditions if any</td></tr>
| **Steps** | TODO: Interactions between actors and system necessary to achieve goal |
| **Variations** | TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |


| UC1 | Explore Historical Sites on an Interactive Map | 
| -------------------------------------- | ------------------- |
| **Description** | Users can explore historical sites through an interactive map, viewing site details by clicking on map markers. This feature helps users visually locate sites and plan visits. |
| **Actors** | Tourists, Local Residents, History Enthusiasts, Students |
| **Assumptions** | Users have an internet connection to load the map and fetch site data.</td></tr>
| **Steps** | 1. The app loads a map of Bristol, highlighting historical sites with markers.<br>2. User zooms in or pans the map to explore specific areas.<br>3. User clicks on a marker to view the site’s details, including name, description, historical period, and images.<br>|
| **Variations** | User can filter the map to show sites based on categories (e.g., time period) |
| **Non-functional** | The map should load within 4 seconds and remain responsive during navigation. |
| **Issues** | Managing performance issues when displaying a large number of site markers. |

TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements

| **Requirement ID** | **Requirement**                                                                                  | **Use Case ID**|
|---------------------|-------------------------------------------------------------------------------------------------|----------------|
| 1                   | The system shall display an interactive map with markers for historical sites.                  | UC4            |
| 2                   | The system shall allow users to filter historical sites by categories such as time period or type.| UC2, UC4     |
| 3                   | The system shall enable users to view detailed information about a selected historical site.    | UC4            |


### Non-Functional Requirements

| **Requirement ID** | **Requirement**                                                                                 | **Use Case ID** |
|---------------------|------------------------------------------------------------------------------------------------|-----------------|
| 1                   | The system shall load the interactive map within 4 seconds to ensure smooth user experience.   | UC4             |
| 2                   | The system shall handle a minimum of 500 simultaneous users without performance degradation.   | All UCs         |
| 3                   | The system shall have a responsive design, optimized for both desktop and mobile devices.      | All UCs         |
